import csv
import os

def generar_ts():
    # El CSV debe estar en la carpeta principal del proyecto
    csv_file = 'db.csv' 
    
    # Ruta profesional: src/data/database.ts
    output_dir = os.path.join('src', 'data')
    output_file = os.path.join(output_dir, 'database.ts')
    
    if not os.path.exists(csv_file):
        print(f"Error: No encontré el archivo {csv_file} en esta carpeta.")
        return

    items = []
    try:
        with open(csv_file, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                # Quitamos espacios en blanco de los datos
                item = f"""  {{
    id: "{row['id'].strip()}",
    title: "{row['title'].strip()}",
    type: "{row['type'].strip()}",
    category: "{row['category'].strip()}",
    url: "{row['url'].strip()}",
    thumbnail: "{row['thumbnail'].strip()}",
    artist: "{row['artist'].strip()}",
    description: "{row['description'].strip()}"
  }}"""
                items.append(item)

        # Contenido del archivo TS
        ts_content = "import { MediaItem } from '../types';\n\n"
        ts_content += "export const mediaDatabase: MediaItem[] = [\n"
        ts_content += ",\n".join(items)
        ts_content += "\n];"

        # PASO CLAVE: Crear la carpeta src/data si no existe
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        print(f"--- PROCESO COMPLETADO ---")
        print(f"Archivo creado en: {output_file}")
        print(f"Total de videos procesados: {len(items)}")

    except Exception as e:
        print(f"Error fatal: {e}")

if __name__ == "__main__":
    generar_ts()
    input("\nPresiona Enter para cerrar...")
