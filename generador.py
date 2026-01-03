import csv
import os
import sys

def generar_ts():
    # 1. CONFIGURACIÓN DE RUTAS
    # El archivo que la App de Audio deposita en esta carpeta
    csv_file = 'videos_exportados.csv' 
    
    # Estructura requerida por el proyecto web
    output_dir = os.path.join('src', 'data')
    output_file = os.path.join(output_dir, 'database.ts')
    
    # 2. VERIFICACIÓN INICIAL
    if not os.path.exists(csv_file):
        print(f"Error: No se encontro el archivo '{csv_file}' en esta ruta.")
        return

    items = []
    try:
        # 3. PROCESAMIENTO DEL CSV (UTF-8 para tildes y eñes)
        with open(csv_file, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                # Limpiamos espacios y escapamos comillas dobles
                def clean(text):
                    if text is None: return ""
                    return text.strip().replace('"', '\\"')

                item = f"""  {{
    id: "{clean(row['id'])}",
    title: "{clean(row['title'])}",
    type: "{clean(row['type'])}",
    category: "{clean(row['category'])}",
    url: "{clean(row['url'])}",
    thumbnail: "{clean(row['thumbnail'])}",
    artist: "{clean(row['artist'])}",
    description: "{clean(row['description'])}"
  }}"""
                items.append(item)

        # 4. CONSTRUCCIÓN DEL ARCHIVO TYPESCRIPT
        ts_content = "import { MediaItem } from '../types';\n\n"
        ts_content += "export const mediaDatabase: MediaItem[] = [\n"
        ts_content += ",\n".join(items)
        ts_content += "\n];"

        # 5. GUARDADO SEGURO
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        # MENSAJES LIMPIOS (Sin emojis para evitar errores de consola en Windows)
        print(f"SINCRONIZACION EXITOSA: {len(items)} registros procesados.")
        print(f"Base de datos actualizada en: {output_file}")

    except Exception as e:
        # Captura de errores sin caracteres especiales
        print(f"ERROR DURANTE EL PROCESO: {str(e)}")

if __name__ == "__main__":
    generar_ts()
