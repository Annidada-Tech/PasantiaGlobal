import { crearRegistroCapacitacion } from './firebase.js';
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


// Comenzando a trabajar con el editor de texto para enviarlo a la base de datos

/*
tinymce.init({
  selector: '#editor', // Selecciona el elemento HTML donde quieres insertar el editor
  plugins: 'image', // Activa el plugin de imágenes
  toolbar: 'image', // Agrega un botón en la barra de herramientas para insertar imágenes
  images_upload_url: 'tu_servidor_de_subida_de_imagenes.php', // URL del servidor para subir imágenes
  // Opcional: Configura opciones adicionales de subida de imágenes
  images_upload_base_path: '/ruta/a/tu/carpeta/de/imagenes/',
  images_upload_credentials: true, // Si es necesario, habilita las credenciales de autenticación para subir imágenes
  images_upload_handler: function (blobInfo, success, failure) {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', 'tu_servidor_de_subida_de_imagenes.php'); // URL del servidor para subir imágenes

    xhr.onload = function () {
      var json;

      if (xhr.status != 200) {
        failure('HTTP Error: ' + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != 'string') {
        failure('Invalid JSON: ' + xhr.responseText);
        return;
      }

      success(json.location);
    };

    formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
  },

  language: 'es',
    branding: false,
    menubar: true,
    skin: 'oxide-dark',
    width: 1000,
    
    menu: {
      file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
      edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
      view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
      insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
      format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
      tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
      table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
      help: { title: 'Help', items: 'help' }
      
    },
    toolbar_location: 'top',

    custom_undo_redo_levels: 10,
    //content_css: 'dark',
    plugins: 'code',
    plugins: 'image',
    image_caption: true,
    image_uploadtab: true,
    a11y_advanced_options: false,
    statusbar: false,

    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | image',
});
.
tinymce.init({
  selector: '#editor',
  width: 1077,
  height: 380,
  plugins: [
    'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
    'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
    'media', 'table', 'emoticons', 'template', 'help'
  ],
  toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons | help',
  menu: {
    favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
  },
  menubar: 'favs file edit view insert format tools table help',
  statusbar: false,
  content_css: 'dark',
});
/*
tinymce.init({ 
    selector: '#editor',
    language: 'es',
    branding: false,
    statusbar: false,
    //menubar: true,
    plugins: 'advlist link image lists',
    skin: 'oxide-dark',
    content_css: 'dark',
    width: 1000,
    menubar: 'file edit view',
    /*
    menu: {
      file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
      edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
      view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
      insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
      format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
      tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
      table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
      
      
    },
    
    toolbar_location: 'top',
    

    custom_undo_redo_levels: 10,
    
    plugins: 'code',
    plugins: 'image',
    image_caption: true,
    image_uploadtab: true,

    
    
  });
*/
/*
//Mandando el contenido del editor de texto a las paginas de contenido de anuncios
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log('Enviando formulario');
    //.getContent({format: 'text'}) <-- Esto es para obtener el contenido del editor de texto en formato de 
    const datos = tinymce.activeEditor.getContent();
    //const datos = tinymce.activeEditor.getContent(); <-- Esto es para obtener el contenido del editor de texto en formato de html
    console.log(datos);  
});

document.getElementById('enviar').addEventListener('click', function () {
  var contenido = tinymce.get('editor').getContent(); // Reemplaza 'tuEditor' con el identificador de tu editor TinyMCE
  localStorage.setItem('contenidoTinyMCE', contenido);
  //window.location.href = './index.html'; // Redirige a la página de destino
  console.log(contenido + ' ' + 'Se ha enviado el contenido del editor de texto');
});
*/