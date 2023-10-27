import { obtenerRegistrosPoliticas } from "./firebase.js";

document.addEventListener('DOMContentLoaded', async function() {
    const seccionPoliticas = document.querySelector('#politicas');

    try {
        // Modifica la función obtenerRegistrosBeneficios para ordenar por timestamp
        const querySnapshot = await obtenerRegistrosPoliticas();

        const politicas = [];

        querySnapshot.forEach((doc) => {
            politicas.push(doc.data());
        });

        // Ordena los novedades por timestamp de forma descendente
        politicas.sort((a, b) => b.timestamp - a.timestamp);

        politicas.forEach((politicas) => {
            const cardHtml = `
            <div class="row py-4">
            <div class="columna">
                <div class="card shadow-sm">
                    <!-- IMAGEN DESDE LA BASE DE DATOS -->
                    <img src="${politicas.imagen}" class="card-img-top" alt=${politicas.titulo}>
                    <div class="">
                        <!-- TITULO DESDE LA BASE DE DATOS -->
                        <h1 class="d-flex justify-content-center">${politicas.titulo}</h1>
                        <!-- CONTENIDO DESDE LA BASE DE DATOS -->
                        <p class="">${politicas.contenido}</p>
                        <!-- CATEGORIA DESDE LA BASE DE DATOS -->
                        <div class="me-gusta d-flex justify-content-end" id="btn-megusta">
                            <small></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
            seccionPoliticas.innerHTML += cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de novedades: ", error);
    }
});
