@echo off
setlocal enabledelayedexpansion

set "carpeta=%~dp0"
set "archivo=nombresArchivos.txt"
set "nombre_script=%~nx0"  :: Obtiene el nombre del script actual

if exist "%archivo%" del "%archivo%"

for %%i in ("%carpeta%\*.*") do (
  set "nombre=%%~ni"
  set "extension=%%~xi"
  
  :: Verifica si el nombre de archivo actual es diferente al nombre del script
  if "!nombre!!extension!" neq "!nombre_script!" (
    echo !nombre!!extension! >> "%archivo%"
  )
)

echo Archivos recopilados en %archivo%
pause
