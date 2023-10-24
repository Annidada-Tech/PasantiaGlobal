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

//Guardando contenido de Beneficios en la base de datos----------------------
const btnGuardarBeneficios = document.getElementById('publicar-beneficio');
btnGuardarBeneficios.addEventListener('click', (e) => {
    e.preventDefault();
  
  // Obtener los valores del formulario
  var titulo = document.getElementById('titulo-publicacion').value;
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  console.log(titulo, categoria, contenido, imagen);
  //manejando el click validando
  if(titulo == "" || categoria == "" || contenido == "" || imagen == ""){
    
    return alerta("Por favor, complete todos los campos", "danger");
  }else{
    
    //posible switch para las categorias
    
  // Llamar a la función para guardar el registro en Firebase
  crearRegistroBeneficios(titulo, categoria, contenido, imagen);
  alert("Se ha guardado correctamente")
  // Limpiar el formulario después de guardar
  document.getElementById('imagen-url').value = '';
  document.getElementById('titulo-publicacion').value = '';
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
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  console.log(titulo, categoria, contenido, imagen);
  //manejando el click validando
  if(titulo == "" || categoria == "" || contenido == "" || imagen == ""){
    
    return alerta("Por favor, complete todos los campos", "danger");
  }else{
    
    //posible switch para las categorias
    
  // Llamar a la función para guardar el registro en Firebase
  crearRegistroNovedades(titulo, categoria, contenido, imagen);
  alert("Se ha guardado correctamente")
  // Limpiar el formulario después de guardar
  document.getElementById('imagen-url').value = '';
  document.getElementById('titulo-publicacion').value = '';
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
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  console.log(titulo, categoria, contenido, imagen);
  //manejando el click validando
  if(titulo == "" || categoria == "" || contenido == "" || imagen == ""){
    
    return alerta("Por favor, complete todos los campos", "danger");
  }else{
    
    //posible switch para las categorias
    
  // Llamar a la función para guardar el registro en Firebase
  crearRegistroPoliticas(titulo, categoria, contenido, imagen);
  alert("Se ha guardado correctamente")
  // Limpiar el formulario después de guardar
  document.getElementById('imagen-url').value = '';
  document.getElementById('titulo-publicacion').value = '';
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
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  console.log(titulo, categoria, contenido, imagen);
  //manejando el click validando
  if(titulo == "" || categoria == "" || contenido == "" || imagen == ""){
    
    return alerta("Por favor, complete todos los campos", "danger");
  }else{
    
    //posible switch para las categorias
    
  // Llamar a la función para guardar el registro en Firebase
  crearRegistroCapacitacion(titulo, categoria, contenido, imagen);
  alert("Se ha guardado correctamente")
  // Limpiar el formulario después de guardar
  document.getElementById('imagen-url').value = '';
  document.getElementById('titulo-publicacion').value = '';
  document.getElementById('categoria-publicacion').value = '';
  document.getElementById('formulario-publicacion').value = '';
  }  
});

