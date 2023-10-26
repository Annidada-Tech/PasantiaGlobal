import { crearRegistroCapacitacion,
         obtenerRegistrosCapacitaciones,
         eliminarRegistroCapacitaciones } from './firebase.js';
import { alerta } from './alerta.js';
const btnVolver = document.getElementById('volver');
btnVolver.addEventListener('click', () => {
  if (localStorage.getItem('rol') === 'admin') {
    window.location.href = '/view/adminGeneral.html';
  } else if (localStorage.getItem('rol') === 'editor') {
    window.location.href = '/index.html';
  }
});

//Guardando contenido de capacitaciones en la base de datos----------------------
const btnGuardarCapacitacionEditor = document.getElementById('publicar-capacitaciones-editor');
btnGuardarCapacitacionEditor.addEventListener('click', (e) => {
    e.preventDefault();
  
  // Obtener los valores del formulario
  var titulo = document.getElementById('titulo-publicacion').value;
  var resumen = document.getElementById('resumen-publicacion').value;
  var categoria = document.getElementById('categoria-publicacion').value;
  var contenido = document.getElementById('formulario-publicacion').value;
  var imagen = document.getElementById('imagen-url').value;  
  console.log(titulo, categoria, contenido, imagen);
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

//Mostrar para eliminar las novedades
document.addEventListener('DOMContentLoaded', async (e) => {
  const tablaCapacitaciones = document.getElementById('tabla-capacitaciones');
  const capacitaciones = await obtenerRegistrosCapacitaciones();

  capacitaciones.forEach((doc) => {
    const capacitaciones = doc.data();
    // Crear una instancia de Date usando el timestamp
    const fecha = new Date(capacitaciones.timestamp.seconds * 1000); // Convierte segundos a milisegundos
    const horaLocal = fecha.toLocaleString(); // Convierte la fecha en hora local
    const row = `
    <tr>
      <td>
        <img src="${capacitaciones.imagen}" width="100">
      </td>
      <td>${capacitaciones.titulo}</td>
      <td>${capacitaciones.categoria}</td>
      <td>${horaLocal}</td> <!-- Agregar la hora local en lugar del timestamp -->
      <td>
        <button class="btn btn-danger btn-sm btn-eliminar" data-id="${doc.id}">Eliminar</button>
      </td>
    </tr>
    `;
    tablaCapacitaciones.innerHTML += row;
  });

  const botonesEliminar = document.querySelectorAll('.btn-eliminar');
  botonesEliminar.forEach((boton) => {
    boton.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
      const idComoString = id.toString(); // Convierte el Timestamp a cadena
      await eliminarRegistroCapacitaciones(idComoString); // Llama a la función con el ID como cadena
      // Realiza cualquier otra acción necesaria después de eliminar el registro
      location.reload();
    });
  });
});
