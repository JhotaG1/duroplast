import json
import ssl
import urllib.request
from bs4 import BeautifulSoup

urls = {
    "thermoforming-film": "https://www.duropac.com/packaging/films/thermoforming-film/",
    "semi-rigid": "https://www.duropac.com/packaging/films/semi-rigid/",
    "lidding-film": "https://www.duropac.com/packaging/films/lidding-film/",
    "skin-film": "https://www.duropac.com/packaging/films/skin-film/",
    "vffs-film": "https://www.duropac.com/packaging/films/vffs-film/",
    "flow-wrap-film": "https://www.duropac.com/packaging/films/flow-wrap-film/",
    "shrink-bags": "https://www.duropac.com/packaging/shrink/shrink-bags/",
    "shrinkable-thermoforming": "https://www.duropac.com/packaging/shrink/shrinkable-thermoforming-film/",
    "shrink-lidding-film": "https://www.duropac.com/packaging/shrink/shrink-film/",
    "stand-up-pouches": "https://www.duropac.com/packaging/preformed-pouches/stand-up-pouch/",
    "vacuum-pouches": "https://www.duropac.com/packaging/preformed-pouches/vacuum-pouch/",
    "box-pouches": "https://www.duropac.com/packaging/preformed-pouches/box-pouch/",
    "spout-pouches": "https://www.duropac.com/packaging/preformed-pouches/spout-pouch/",
    "high-barrier-casings": "https://www.duropac.com/packaging/casings/high-barrier-casings/",
    "recyclable-pouches": "https://www.duropac.com/packaging/recyclable/recyclable-pouches/",
    "recyclable-shrink-bags": "https://www.duropac.com/packaging/recyclable/recyclable-shrink-bags/",
    "recyclable-thermoforming": "https://www.duropac.com/packaging/recyclable/recycable-thermoforming-film/",
    "flat-poly-bags": "https://www.duropac.com/packaging/poly-products/poly-bags/",
    "gusseted-poly-bags": "https://www.duropac.com/packaging/poly-products/gusseted-poly-bags/",
    "poly-tubing-rolls": "https://www.duropac.com/packaging/poly-products/tubing/",
    "box-liners": "https://www.duropac.com/packaging/poly-products/box-liners/",
    "skin-boards": "https://www.duropac.com/packaging/paper-board/skin-board/",
    "presentation-boards": "https://www.duropac.com/packaging/paper-board/presentation-board/"
}

# Create unverified context to bypass SSL cert issues
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch_features(url):
    features = []
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            html = response.read()
            soup = BeautifulSoup(html, 'html.parser')
            
            # Find a "Features" header
            features_header = soup.find(lambda tag: tag.name in ['h2', 'h1', 'h3'] and 'feature' in tag.get_text(strip=True).lower())
            
            if features_header:
                # Find all siblings until next h2
                for sibling in features_header.find_next_siblings():
                    if sibling.name == 'h2':
                        break
                    if sibling.name == 'h3' or sibling.name == 'li':
                        text = sibling.get_text(strip=True)
                        if text:
                            features.append(text)
                    elif sibling.name == 'ul':
                        for li in sibling.find_all('li'):
                            text = li.get_text(strip=True)
                            if text:
                                features.append(text)
            
            # If nothing found, try finding any generic ul list in the main content area
            if not features:
                # find a general list of items that could be features
                lists = soup.find_all('ul')
                for ul in lists:
                    # heuristic: lists with class "elementor-icon-list-items" or similar
                    if 'elementor-icon-list-items' in ul.get('class', []) or len(ul.find_all('li')) > 2:
                        for li in ul.find_all('li'):
                            text = li.get_text(strip=True)
                            # ignore nav links
                            if text and 'Home' not in text and 'Packaging' not in text:
                                features.append(text)
                        break

    except Exception as e:
        print(f"Error fetching {url}: {e}")
        
    return list(dict.fromkeys(features)) # return unique features

with open('data/products.json', 'r') as f:
    products = json.load(f)

for p in products:
    slug = p['slug']
    if slug in urls:
        print(f"Fetching features for {slug}...")
        feats = fetch_features(urls[slug])
        
        # fallback defaults if none found
        if not feats:
            feats = [
                f"High quality {p['category'].lower()} solution",
                "Customizable to your specific requirements",
                "Optimized for industrial food packaging"
            ]
        
        # Clean up some weird extractions
        clean_feats = []
        for f in feats:
            if len(f) > 50 or len(f) < 3: continue
            clean_feats.append(f)
            
        p['features'] = clean_feats[:10] # limit to 10 max

with open('data/products.json', 'w') as f:
    json.dump(products, f, indent=2)

print("Done updating features!")
