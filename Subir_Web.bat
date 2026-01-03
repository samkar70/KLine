@echo off
d:
cd "D:\AAREADY EnCanto Web"

echo Descargando posibles cambios desde la nube...
git pull origin main

echo Ejecutando generador...
python generador.py

echo Subiendo cambios a GitHub...
git add src/data/database.ts
git commit -m "Actualizacion automatica"
git push origin main

echo --- PROCESO TERMINADO ---
pause