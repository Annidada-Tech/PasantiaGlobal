import { crearRegistroBeneficios,
         crearRegistroNovedades,
         crearRegistroPoliticas,
         crearRegistroCapacitacion} from './firebase.js';
import { alerta } from './alerta.js';
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

const botonPaginaEditor = document.getElementById('editor-page');
botonPaginaEditor.addEventListener('click', () => {
  window.location.href = '/view/editor.html';
});

const botonIndex = document.getElementById('volver');
botonIndex.addEventListener('click', () => {
  window.location.href = '/index.html';
});

//Guardando contenido de Beneficios en la base de datos----------------------
const btnGuardarBeneficios = document.getElementById('publicar-beneficio');
btnGuardarBeneficios.addEventListener('click', (e) => {
    e.preventDefault();
  
  // Obtener los valores del formulario
  var titulo = document.getElementById('titulo-publicacion').value;
  var resumen = document.getElementById('resumen-publicacion').value;
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  //console.log(titulo, resumen, categoria, contenido, imagen);
  //manejando el click validando
  if(titulo == "" || categoria == "" || contenido == "" || imagen == "" || resumen == ""){
    
    return alerta("Por favor, complete todos los campos", "danger");
  }else{
    
    //posible switch para las categorias
    
  // Llamar a la función para guardar el registro en Firebase
  crearRegistroBeneficios(titulo, resumen, categoria, contenido, imagen);
  alert("Se ha guardado correctamente")
  // Limpiar el formulario después de guardar
  document.getElementById('imagen-url').value = '';
  document.getElementById('titulo-publicacion').value = '';
  document.getElementById('resumen-publicacion').value = '';
  document.getElementById('categoria-publicacion').value = '';
  document.getElementById('formulario-publicacion').value = '';
  
  }  
  
});

//Guardando contenido de Novedades en la base de datos----------------------
const btnGuardarNovedades = document.getElementById('publicar-novedades');
btnGuardarNovedades.addEventListener('click', (e) => {
    e.preventDefault();
  
  // Obtener los valores del formulario
  var titulo = document.getElementById('titulo-publicacion').value;
  var resumen = document.getElementById('resumen-publicacion').value;
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  //console.log(titulo, resumen, categoria, contenido, imagen);
  //manejando el click validando
  if(titulo == "" || categoria == "" || contenido == "" || imagen == "" || resumen == ""){
    
    return alerta("Por favor, complete todos los campos", "danger");
  }else{
    
    //posible switch para las categorias
    
  // Llamar a la función para guardar el registro en Firebase
  crearRegistroNovedades(titulo, resumen, categoria, contenido, imagen);
  alert("Se ha guardado correctamente")
  // Limpiar el formulario después de guardar
  document.getElementById('imagen-url').value = '';
  document.getElementById('titulo-publicacion').value = '';
  document.getElementById('resumen-publicacion').value = '';
  document.getElementById('categoria-publicacion').value = '';
  document.getElementById('formulario-publicacion').value = '';
  }  
});


//Guardando contenido de Politicas en la base de datos----------------------
const btnGuardarPoliticas = document.getElementById('publicar-politicas');
btnGuardarPoliticas.addEventListener('click', (e) => {
    e.preventDefault();
  
  // Obtener los valores del formulario
  var titulo = document.getElementById('titulo-publicacion').value;
  var resumen = document.getElementById('resumen-publicacion').value;
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  //console.log(titulo, resumen, categoria, contenido, imagen);
  //manejando el click validando
  if(titulo == "" || categoria == "" || contenido == "" || imagen == "" || resumen == ""){
    
    return alerta("Por favor, complete todos los campos", "danger");
  }else{
    
    //posible switch para las categorias
    
  // Llamar a la función para guardar el registro en Firebase
  crearRegistroPoliticas(titulo, resumen, categoria, contenido, imagen);
  alert("Se ha guardado correctamente")
  // Limpiar el formulario después de guardar
  document.getElementById('imagen-url').value = '';
  document.getElementById('titulo-publicacion').value = '';
  document.getElementById('resumen-publicacion').value = '';
  document.getElementById('categoria-publicacion').value = '';
  document.getElementById('formulario-publicacion').value = '';
  }  
});

//Guardando contenido de capacitaciones en la base de datos----------------------
const btnGuardarCapacitacion = document.getElementById('publicar-capacitaciones');
btnGuardarCapacitacion.addEventListener('click', (e) => {
    e.preventDefault();
  
  // Obtener los valores del formulario
  var titulo = document.getElementById('titulo-publicacion').value;
  var resumen = document.getElementById('resumen-publicacion').value;
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  //console.log(titulo, resumen, categoria, contenido, imagen);
  //manejando el click validando
  if(titulo == "" || categoria == "" || contenido == "" || imagen == "" || resumen == ""){
    
    return alerta("Por favor, complete todos los campos", "danger");
  }else{
    
    //posible switch para las categorias
    
  // Llamar a la función para guardar el registro en Firebase
  crearRegistroCapacitacion(titulo, resumen, categoria, contenido, imagen);
  alert("Se ha guardado correctamente")
  // Limpiar el formulario después de guardar
  document.getElementById('imagen-url').value = '';
  document.getElementById('titulo-publicacion').value = '';
  document.getElementById('resumen-publicacion').value = '';
  document.getElementById('categoria-publicacion').value = '';
  document.getElementById('formulario-publicacion').value = '';
  }  
});

