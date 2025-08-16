#!/usr/bin/env bash

for file in ./imagenes/*.jpg; do
    nombre=$(basename "$file" .jpg)

    convert "$file" "./imagenes/$nombre.webp"

    rm $file
done

for file in ./imagenes/*.png; do
    nombre=$(basename "$file" .png)

    convert "$file" "./imagenes/$nombre.webp"

    rm $file
done

echo "Imágenes convertidas con éxito"
