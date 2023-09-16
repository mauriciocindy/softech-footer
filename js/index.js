// Obtén el contenedor donde se mostrarán las imágenes
const contenedorImagenes = document.getElementById("contenedor-imagenes");

// Realiza una solicitud AJAX para obtener la lista de nombres de archivos
fetch("archivos.txt")
    .then((response) => response.text())
    .then((data) => {
        // Divide los nombres de archivos en un array
        const nombresArchivos = data.trim().split("\n");

        // Itera a través de los nombres de archivos y crea elementos de imagen
        nombresArchivos.forEach((nombreArchivo) => {
            const imagen = document.createElement("img");
            imagen.src = nombreArchivo.trim(); // Asume que los nombres son rutas relativas a las imágenes

            // Agrega la imagen al contenedor
            contenedorImagenes.appendChild(imagen);
        });
    })
    .catch((error) => {
        console.error(
            "Error al cargar la lista de nombres de archivos:",
            error
        );
    });
