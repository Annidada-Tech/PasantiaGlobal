import { obtenerRegistrosBeneficios } from "./firebase.js";

document.addEventListener('DOMContentLoaded', async function() {
    const seccionBeneficios = document.querySelector('#beneficios');

    try {
        // Modifica la función obtenerRegistrosBeneficios para ordenar por timestamp
        const querySnapshot = await obtenerRegistrosBeneficios();

        const beneficios = [];

        querySnapshot.forEach((doc) => {
            beneficios.push(doc.data());
        });

        // Ordena los beneficios por timestamp de forma descendente
        beneficios.sort((a, b) => b.timestamp - a.timestamp);

        beneficios.forEach((beneficio) => {
            const cardHtml = `
                <div class="row py-4">
                    <div class="columna">
                        <div class="card shadow-sm">
                            <!-- IMAGEN DESDE LA BASE DE DATOS -->
                            <img src="${beneficio.imagen}" class="card-img-top" alt=${beneficio.titulo}>
                            <div class="card-body">
                                <!-- TITULO DESDE LA BASE DE DATOS -->
                                <h1 class="d-flex justify-content-center">${beneficio.titulo}</h1>
                                <!-- CONTENIDO DESDE LA BASE DE DATOS -->
                                <p class="card-text">${beneficio.contenido}</p>
                                <!-- CATEGORIA DESDE LA BASE DE DATOS -->
                                <div class="me-gusta d-flex justify-content-end" id="btn-megusta">
                                    <small></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            seccionBeneficios.innerHTML += cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de beneficios: ", error);
    }
});
