import { obtenerRegistrosNovedades } from "./firebase.js";

document.addEventListener('DOMContentLoaded', async function() {
    const seccionNovedades = document.querySelector('#novedades');

    try {
        // Modifica la función obtenerRegistrosBeneficios para ordenar por timestamp
        const querySnapshot = await obtenerRegistrosNovedades();

        const novedades = [];

        querySnapshot.forEach((doc) => {
            novedades.push(doc.data());
        });

        // Ordena los novedades por timestamp de forma descendente
        novedades.sort((a, b) => b.timestamp - a.timestamp);

        novedades.forEach((novedades) => {
            const cardHtml = `
            <div class="row py-4">
            <div class="columna">
                <div class="card shadow-sm">
                    <!-- IMAGEN DESDE LA BASE DE DATOS -->
                    <img src="${novedades.imagen}" class="card-img-top" alt=${novedades.titulo}>
                    <div class="">
                        <!-- TITULO DESDE LA BASE DE DATOS -->
                        <h1 class="d-flex justify-content-center">${novedades.titulo}</h1>
                        <!-- CONTENIDO DESDE LA BASE DE DATOS -->
                        <p class="">${novedades.contenido}</p>
                        <!-- CATEGORIA DESDE LA BASE DE DATOS -->
                        <div class="me-gusta d-flex justify-content-end" id="btn-megusta">
                            <small></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
            seccionNovedades.innerHTML += cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de novedades: ", error);
    }
});
