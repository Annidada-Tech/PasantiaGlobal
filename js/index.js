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
                        <img src="${beneficio.imagen}" height="433px" class="card-img-top" alt="${beneficio.titulo}">
                    </div>
                    <div class="card-body">
                    <textarea class="card-text">${beneficio.resumen}</textarea>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/view/beneficios.html">
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-light">Ver Página de Beneficios</button>
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


//--------------------CARGA DE DATOS EN EL INDEX NOVEDADES---------------------------

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
                        <img src="${novedades.imagen}" height="433px" class="card-img-top" alt="${novedades.titulo}">
                    </div>
                    <div class="card-body">
                        <textarea class="card-text">${novedades.resumen}</textarea>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/view/novedades.html">
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-light">Ver Página de Novedades</button>
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
        console.error("Error al obtener registros de novedades: ", error);
    }


//--------------------CARGA DE DATOS EN EL INDEX POLITICAS---------------------------

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
                    <img src="${politicas.imagen}" height="433px" class="card-img-top" alt="${politicas.titulo}">   
                <div class="card-body">
                <textarea class="card-text">${politicas.resumen}</textarea>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/view/politicas.html">
                                <button type="button" class="btn btn-sm btn-outline-secondary btn-light">Ver Pagina Políticas</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionPoliticasIndex.innerHTML = cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de politicas: ", error);
    }


//--------------------CARGA DE DATOS EN EL INDEX POLITICAS---------------------------

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
                <div class="card ">
                    <img src="${capacitaciones.imagen}" height="433px" class="card-img-top" alt="${capacitaciones.titulo}">   
                <div class="card-body">
                <textarea class="card-text">${capacitaciones.resumen}</textarea>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/view/capacitacion.html">
                                <button type="button" class="btn btn-sm btn-outline-secondary btn-light">Ver Pagina Capacitaciones</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionCapacitacionesIndex.innerHTML = cardHtml;
        });
    } catch (error) {
        console.error("Error al obtener registros de capacitaciones: ", error);
    }
});




/*
document.addEventListener('DOMContentLoaded', async function() {
    // Fecha futura (3 meses a partir de la fecha actual)
    var fechaF = new Date();
    var horasFSumar = 0;
    var minutosFSumar = 0;
    var segundosFSumar = 10;
    // suma horas, minutos y segundos a la fecha actual
    fechaF.setHours(fechaF.getHours() + horasFSumar);
    fechaF.setMinutes(fechaF.getMinutes() + minutosFSumar);
    fechaF.setSeconds(fechaF.getSeconds() + segundosFSumar);
    
    
    // Fecha actual
    var fechaA = new Date();
    
    // Sumar horas, minutos y segundos a la fecha actual
    var horasASumar = 0;
    var minutosASumar = 2;
    var segundosASumar = 0;
    
    fechaA.setHours(fechaA.getHours() + horasASumar);
    fechaA.setMinutes(fechaA.getMinutes() + minutosASumar);
    fechaA.setSeconds(fechaA.getSeconds() + segundosASumar);
    
    console.log("Fecha futura:", fechaF.toLocaleString());
    console.log("Fecha actual:", fechaA.toLocaleString());
    
    // Comprueba si la fecha actual es mayor o igual que la fecha futura
    if (fechaA >= fechaF) {
        // Si la fecha futura se ha alcanzado o superado, borra el contenido
        var contenido = document.getElementById("contenido");
        contenido.innerHTML = "<p>La aplicación web ha expirado.</p>";
    }
    });
  */
  
  