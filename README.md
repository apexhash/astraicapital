# ASTRAI Capital — sitio estático para GitHub Pages

Todos los archivos necesarios para la página están en esta misma carpeta, junto a `index.html`. No hay carpetas de imágenes ni rutas dependientes de WebDev.

## Publicación en GitHub Pages

1. Sube el contenido de esta carpeta al repositorio (el archivo `index.html` debe quedar en la raíz publicada).
2. En GitHub, abre **Settings → Pages** y selecciona la rama y la carpeta de publicación.
3. La página usa rutas relativas, por lo que funciona tanto en un dominio propio como en una URL de proyecto de GitHub Pages.

## Vista local

No requiere instalación ni compilación. Ejecuta desde esta carpeta:

```bash
python3 -m http.server 8080
```

Después abre `http://localhost:8080`.

## Formulario

El formulario valida los campos y muestra un mensaje. Para habilitar el envío por correo, configura `CONTACT_EMAIL` en `app.js` con la dirección de ASTRAI.
