import { crearRegistro,
        obtenerRegistrosBeneficios,
        obtenerRegistrosNovedades,
        obtenerRegistrosPoliticas,
        obtenerRegistrosCapacitaciones,
    } from './firebase.js';

import { alerta } from './alerta.js';

import {  } from "./firebase.js";
//--------------------CARGA DE DATOS EN EL INDEX BENEFICIOS---------------------------
document.addEventListener('DOMContentLoaded', async function() {
    const seccionBeneficiosIndex = document.querySelector('#beneficios-index');

    try {
        // Modifica la función obtenerRegistrosBeneficios para ordenar por timestamp
        const querySnapshot = await obtenerRegistrosBeneficios();

        const beneficiosIndex = [];

        querySnapshot.forEach((doc) => {
            beneficiosIndex.push(doc.data());
        });

        // Ordena los beneficiosIndex por timestamp de forma descendente
        beneficiosIndex.sort((a, b) => b.timestamp - a.timestamp);

        beneficiosIndex.forEach((beneficio) => {
            //console.log(beneficio);
            const cardHtml = `
            <div class="columna">
                <div class="card shadow-sm">
                    <div class="card-image">
                        <img src="${beneficio.imagen}" alt="${beneficio.titulo}">
                    </div>
                    <div class="card-body">
                    <textarea class="card-text">${beneficio.resumen}</textarea>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/view/beneficios.html">
                                    <button type="button" class="btn btn-sm btn-outline-primary">Ver Página de Beneficios</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionBeneficiosIndex.innerHTML = cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de beneficios: ", error);
    }
});

//--------------------CARGA DE DATOS EN EL INDEX NOVEDADES---------------------------
document.addEventListener('DOMContentLoaded', async function() {
    const seccionNovedadesIndex = document.querySelector('#novedades-index');

    try {
        // Modifica la función obtenerRegistrosBeneficios para ordenar por timestamp
        const querySnapshot = await obtenerRegistrosNovedades();

        const novedadesIndex = [];

        querySnapshot.forEach((doc) => {
            novedadesIndex.push(doc.data());
        });

        // Ordena los novedadesIndex por timestamp de forma descendente
        novedadesIndex.sort((a, b) => b.timestamp - a.timestamp);

        novedadesIndex.forEach((novedades) => {
            //console.log(novedades);
            const cardHtml = `
            <div class="columna">
                <div class="card shadow-sm">
                    <div class="card-image">
                        <img src="${novedades.imagen}" alt="${novedades.titulo}">
                    </div>
                    <div class="card-body">
                        <textarea class="card-text">${novedades.resumen}</textarea>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/view/beneficios.html">
                                    <button type="button" class="btn btn-sm btn-outline-primary">Ver Página de Beneficios</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionNovedadesIndex.innerHTML = cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de beneficios: ", error);
    }
});

//--------------------CARGA DE DATOS EN EL INDEX POLITICAS---------------------------
document.addEventListener('DOMContentLoaded', async function() {
    const seccionPoliticasIndex = document.querySelector('#politicas-index');

    try {
        // Modifica la función obtenerRegistrosBeneficios para ordenar por timestamp
        const querySnapshot = await obtenerRegistrosPoliticas();

        const politicasIndex = [];

        querySnapshot.forEach((doc) => {
            politicasIndex.push(doc.data());
        });

        // Ordena los politicasIndex por timestamp de forma descendente
        politicasIndex.sort((a, b) => b.timestamp - a.timestamp);

        politicasIndex.forEach((politicas) => {
            //console.log(politicas);
            const cardHtml = `
            <div class="columna">
                <div class="card shadow-sm">
                    <img src="${politicas.imagen}" class="card-img-top" alt="${politicas.titulo}">   
                <div class="card-body">
                <textarea class="card-text">${politicas.resumen}</textarea>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/view/beneficios.html">
                                <button type="button" class="btn btn-sm btn-outline-primary">Ver Pagina Políticas</button></a>
                                  <!--<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionPoliticasIndex.innerHTML = cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de beneficios: ", error);
    }
});

//--------------------CARGA DE DATOS EN EL INDEX POLITICAS---------------------------
document.addEventListener('DOMContentLoaded', async function() {
    const seccionCapacitacionesIndex = document.querySelector('#capacitaciones-index');

    try {
        // Modifica la función obtenerRegistrosBeneficios para ordenar por timestamp
        const querySnapshot = await obtenerRegistrosCapacitaciones();

        const capacitacionesIndex = [];

        querySnapshot.forEach((doc) => {
            capacitacionesIndex.push(doc.data());
        });

        // Ordena los capacitacionesIndex por timestamp de forma descendente
        capacitacionesIndex.sort((a, b) => b.timestamp - a.timestamp);

        capacitacionesIndex.forEach((capacitaciones) => {
            //console.log(capacitaciones);
            const cardHtml = `
            <div class="columna">
                <div class="card shadow-sm">
                    <img src="${capacitaciones.imagen}" class="card-img-top" alt="${capacitaciones.titulo}">   
                <div class="card-body">
                <textarea class="card-text">${capacitaciones.resumen}</textarea>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/view/beneficios.html">
                                <button type="button" class="btn btn-sm btn-outline-primary">Ver Pagina Capacitaciones</button></a>
                                  <!--<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionCapacitacionesIndex.innerHTML = cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de beneficios: ", error);
    }
});

/*

const registrar = document.getElementById('registrar-usuario');
registrar.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre-user').value;
    const apellido = document.getElementById('apellido-user').value;
    const usuario= document.getElementById('usuario-user').value;
    const password = document.getElementById('password-user').value;
    const rol = document.getElementById('rol-user').value;

    //console.log(nombre, apellido, usuario, password, rol);

    crearRegistro(nombre, apellido, usuario, password, rol);
    bootstrap.Modal.getInstance(document.getElementById('ModalForm')).hide();
    alerta('Usuario registrado correctamente');

});
*/
// Esperar al evento 'shown.bs.modal' para agregar el evento
$('#ModalForm').on('shown.bs.modal', function () {
    const registrar = document.getElementById('registrar-usuario');
    registrar.addEventListener('click', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre-user').value;
        const apellido = document.getElementById('apellido-user').value;
        const usuario = document.getElementById('usuario-user').value;
        const password = document.getElementById('password-user').value;
        const rol = document.getElementById('rol-user').value;

        //console.log(nombre, apellido, usuario, password, rol);

        crearRegistro(nombre, apellido, usuario, password, rol);
        bootstrap.Modal.getInstance(document.getElementById('ModalForm')).hide();
        alerta('Usuario registrado correctamente');
    });
});
