import { crearRegistroBeneficios } from './firebase.js';
/**
 * PAGINA WEB ADMINISTRADOR GENERAL:
 * En esta pagina se pretende que el administrador general pueda:
 * 1. Crear nuevos administradores secundarios
 * 2. Crear nuevos administradores de capacitaciones
 * 3. Puede ingresar al editor de contenido con acceso general para:
 *      3.1. Crear nuevas noticias
 *      3.2. Crear nuevos eventos
 *      3.3. Crear nuevas capacitaciones
 *      3.4. Crear nuevos beneficios
 *      3.5. Crear nuevos poloíticas
 *      3.6. Crear nuevos novedades
 */

//Boton del login que redirige al adminGeneral.js
const Volver = document.getElementById('volver');
btnVolver.addEventListener('click', () => {
    window.location.href = '/index.html';
});
//Boton que redirige al editor de contenido
const btnEditorContenido = document.getElementById('editor-page');
btnEditorContenido.addEventListener('click', () => {
    window.location.href = '/view/editor.html';
});


//Guardando contenido del editor en la base de datos
const btnGuardar = document.getElementById('guardar');
btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Guardando contenido...');
  /*  // Obtener los valores del formulario
  var titulo = document.getElementById('titulo-publicacion').value;
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;

  // Llamar a la función para guardar el registro en Firebase
  crearRegistroBeneficios(titulo, categoria, contenido);

  // Limpiar el formulario después de guardar
  document.getElementById('titulo-publicacion').value = '';
  document.getElementById('categoria-publicacion').value = '';
  document.getElementById('formulario-publicacion').value = '';
  */
});