import urllib.request
import os

images = {
    "VFFS.jpg": "https://www.duropac.com/wp-content/uploads/2024/02/VFFS.jpg",
    "Beef-lidding-film.png": "https://www.duropac.com/wp-content/uploads/2024/08/Beef-lidding-film.png",
    "Box-Pouch.png": "https://www.duropac.com/wp-content/uploads/2024/08/Box-Pouch.png",
    "Casigns.png": "https://www.duropac.com/wp-content/uploads/2024/08/Casigns.png",
    "Recyclable-Thermoforming-film.png": "https://www.duropac.com/wp-content/uploads/2024/08/Recyclable-Thermoforming-film.png",
    "Recyclable-shrink-bags.png": "https://www.duropac.com/wp-content/uploads/2024/08/Recyclable-shrink-bags.png",
    "Shrinkwrapped-cheese.png": "https://www.duropac.com/wp-content/uploads/2024/08/Shrinkwrapped-cheese.png",
    "Spout-Pouch.png": "https://www.duropac.com/wp-content/uploads/2024/08/Spout-Pouch.png",
    "Stand-Up-Pouch-2.png": "https://www.duropac.com/wp-content/uploads/2024/08/Stand-Up-Pouch-2.png",
    "Stand-Up-Pouch-Recyclable.png": "https://www.duropac.com/wp-content/uploads/2024/08/Stand-Up-Pouch-Recyclable.png",
    "Steak-in-skin-film.png": "https://www.duropac.com/wp-content/uploads/2024/08/Steak-in-skin-film.png",
    "Thermoformed-Feta-cheese.png": "https://www.duropac.com/wp-content/uploads/2024/08/Thermoformed-Feta-cheese.png",
    "Vacuumed-pouch.png": "https://www.duropac.com/wp-content/uploads/2024/08/Vacuumed-pouch.png",
    "Shrinkable-Thermoforming-film-Meat.png": "https://www.duropac.com/wp-content/uploads/2024/12/Shrinkable-Thermoforming-film-Meat.png",
    "Skin-boards.png": "https://www.duropac.com/wp-content/uploads/2024/12/Skin-boards.png"
}

for name, url in images.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open('public/' + name, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")

