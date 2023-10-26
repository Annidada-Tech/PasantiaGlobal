import { crearRegistroBeneficios,
         crearRegistroNovedades,
         crearRegistroPoliticas,
         crearRegistroCapacitacion,
         obtenerRegistrosBeneficios,
         obtenerRegistrosNovedades,
         obtenerRegistrosPoliticas,
         obtenerRegistrosCapacitaciones,  
         eliminarRegistroBeneficios,     
        } from './firebase.js';
import { alerta } from './alerta.js';

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

document.addEventListener('DOMContentLoaded', async (e) => {
  const tablaBeneficios = document.getElementById('tabla-beneficios');
  const beneficios = await obtenerRegistrosBeneficios();

  beneficios.forEach((doc) => {
    const beneficio = doc.data();
    // Crear una instancia de Date usando el timestamp
    const fecha = new Date(beneficio.timestamp.seconds * 1000); // Convierte segundos a milisegundos
    const horaLocal = fecha.toLocaleString(); // Convierte la fecha en hora local
    const row = `
    <tr>
      <td>
        <img src="${beneficio.imagen}" width="100">
      </td>
      <td>${beneficio.titulo}</td>
      <td>${beneficio.categoria}</td>
      <td>${horaLocal}</td> <!-- Agregar la hora local en lugar del timestamp -->
      <td>
        <button class="btn btn-danger btn-sm btn-eliminar" data-id="${doc.id}">Eliminar</button>
      </td>
    </tr>
    `;
    tablaBeneficios.innerHTML += row;
  });

  const botonesEliminar = document.querySelectorAll('.btn-eliminar');
  botonesEliminar.forEach((boton) => {
    boton.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
      const idComoString = id.toString(); // Convierte el Timestamp a cadena
      await eliminarRegistroBeneficios(idComoString); // Llama a la función con el ID como cadena
      // Realiza cualquier otra acción necesaria después de eliminar el registro
      location.reload();
    });
  });
});




/*
//Mostrando contenido de Beneficios en la tabla de la pagina de administrador automaticamente

document.addEventListener('DOMContentLoaded', async (e) => {
  const tablapublicaciones = document.getElementById('tabla-publicaciones');
  const publicaciones = [];

  const beneficios = await obtenerRegistrosBeneficios();
  const novedades = await obtenerRegistrosNovedades();
  const politicas = await obtenerRegistrosPoliticas();
  const capacitaciones = await obtenerRegistrosCapacitaciones();

  beneficios.forEach((doc) => {
    publicaciones.push(doc.data());
  });
  novedades.forEach((doc) => {
    publicaciones.push(doc.data());
  });
  politicas.forEach((doc) => {
    publicaciones.push(doc.data());
  });
  capacitaciones.forEach((doc) => {
    publicaciones.push(doc.data());
  });

  publicaciones.sort((a, b) => b.timestamp - a.timestamp);

  publicaciones.forEach((publicacion) => {
    // Crear una instancia de Date usando el timestamp
    const fecha = new Date(publicacion.timestamp.seconds * 1000); // Convierte segundos a milisegundos

    const horaLocal = fecha.toLocaleString(); // Convierte la fecha en hora local

    const row = `
    <tr>
      <td>
        <img src="${publicacion.imagen}" width="100">
      </td>
      <td>${publicacion.titulo}</td>
      <td>${publicacion.categoria}</td>
      <td>${horaLocal}</td> <!-- Agregar la hora local en lugar del timestamp -->
      <td>
        <button class="btn btn-danger btn-sm btn-eliminar" data-id="${publicacion.timestamp}">Eliminar</button>
      </td>
    </tr>
    `;
    tablapublicaciones.innerHTML += row;
  });
});
*/




