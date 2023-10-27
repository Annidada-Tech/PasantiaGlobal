import { obtenerRegistrosCapacitaciones } from "./firebase.js";

document.addEventListener('DOMContentLoaded', async function() {
    const seccionCapacitaciones = document.querySelector('#capacitacion');

    try {
        // Modifica la función obtenerRegistrosBeneficios para ordenar por timestamp
        const querySnapshot = await obtenerRegistrosCapacitaciones();

        const capacitacion = [];

        querySnapshot.forEach((doc) => {
            capacitacion.push(doc.data());
        });

        // Ordena los capacitacion por timestamp de forma descendente
        capacitacion.sort((a, b) => b.timestamp - a.timestamp);

        capacitacion.forEach((capacitacion) => {
            const cardHtml = `
            <div class="row py-4">
            <div class="columna">
                <div class="card shadow-sm">
                    <!-- IMAGEN DESDE LA BASE DE DATOS -->
                    <img src="${capacitacion.imagen}" class="card-img-top" alt=${capacitacion.titulo}>
                    <div class="">
                        <!-- TITULO DESDE LA BASE DE DATOS -->
                        <h1 class="d-flex justify-content-center">${capacitacion.titulo}</h1>
                        <!-- CONTENIDO DESDE LA BASE DE DATOS -->
                        <p class="">${capacitacion.contenido}</p>
                        <!-- CATEGORIA DESDE LA BASE DE DATOS -->
                        <div class="me-gusta d-flex justify-content-end" id="btn-megusta">
                            <small></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
            seccionCapacitaciones.innerHTML += cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de novedades: ", error);
    }
});
