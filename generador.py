import csv
import os
import re

def extraer_id_youtube(url):
    """Extrae el ID de 11 caracteres de cualquier formato de YouTube."""
    patron = r"(?:v=|\/|embed\/|shorts\/|live\/)([a-zA-Z0-9_-]{11})(?:[?&]|$)"
    match = re.search(patron, url)
    return match.group(1) if match else url

def generar_ts():
    csv_file = 'db.csv' 
    output_dir = os.path.join('src', 'data')
    output_file = os.path.join(output_dir, 'database.ts')
    
    if not os.path.exists(csv_file):
        print(f"Error: No encontré el archivo {csv_file}")
        return

    items = []
    try:
        with open(csv_file, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                url_original = row['url'].strip()
                id_limpio = extraer_id_youtube(url_original)
                
                item = f"""  {{
    id: "{row['id'].strip()}",
    title: "{row['title'].strip()}",
    type: "{row['type'].strip()}",
    category: "{row['category'].strip()}",
    url: "{id_limpio}",
    thumbnail: "{row['thumbnail'].strip()}",
    artist: "{row['artist'].strip()}",
    description: "{row['description'].strip()}"
  }}"""
                items.append(item)

        # CORRECCIÓN AQUÍ: Solo una llave { } para MediaItem
        ts_content = "import { MediaItem } from '../types';\n\n"
        ts_content += "export const mediaDatabase: MediaItem[] = [\n"
        ts_content += ",\n".join(items)
        ts_content += "\n];"

        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        print(f"Éxito: {len(items)} elementos procesados.")

    except Exception as e:
        print(f"Error procesando CSV: {e}")

if __name__ == "__main__":
    generar_ts()
