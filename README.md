Descripcion aplicacion Inter Areas - Pasantias Global Solutions 2023

Página de Inicio (index.html): Aquí, los usuarios pueden ver una barra de navegación y un formulario de inicio de sesión. Solo los administradores pueden acceder al contenido exclusivo después de la autenticación.

Inicio de Sesión: El inicio de sesión está diseñado para autenticar a los administradores. Los administradores pueden ingresar sus credenciales (editor-admin), y luego se verifica en la base de datos de Firebase si las credenciales son correctas. Si lo son, se les permite acceder a una página especial para administradores.

Página de Administrador: Esta página especial es solo para administradores y les permite realizar tareas como editar contenido. Aquí, los administradores pueden editar contenido utilizando un editor de texto enriquecido como TinyMCE. Además, pueden administrar el contenido en las categorías de beneficios, novedades, políticas y capacitaciones.

Categorías de Contenido: Cada una de estas categorías (beneficios, novedades, políticas y capacitaciones) tendrá su propia página con contenido relacionado. Los administradores pueden editar y actualizar el contenido en estas páginas.

Firebase es una excelente elección para gestionar la autenticación y la base de datos en este escenario.


Para permitir que el administrador interactúe con la aplicación: 

Se crea un formulario de publicación: En la página del administrador, que permite al administrador ingresar el contenido que desea publicar.
Este formulario incluye campos como Imagen url, título, contenido, categoría.

Conexión con Firebase: para manejar la comunicación entre el formulario y la base de datos Firestore para almacenar la información.

Categorización del Contenido: En el formulario, incluye un campo o una lista desplegable que permita al administrador seleccionar en qué categoría desea publicar el contenido (beneficios, novedades, políticas, capacitaciones).

Enviar Datos a Firebase: Cuando el administrador complete el formulario y seleccione una categoría, podrá enviar los datos del formulario a Firebase.

Por Realizar:


Recuperación de Datos para Mostrar en las Páginas Públicas: En las páginas públicas (beneficios, novedades, políticas, capacitaciones), se escribiran scripts que recuperen los datos específicos de la categoría correspondiente desde Firebase y los muestren en la página. 

Seguridad y Control de Acceso: nos aseguraremos luego de configurar las reglas de seguridad en Firebase para garantizar que solo el administrador tenga acceso a la función de publicación y que los usuarios no autorizados no puedan modificar los datos.

Pruebas y Validaciones: Antes de implementar estas características en producción, es vamos a realizar pruebas exhaustivas para garantizar que todo funcione como se espera y que la seguridad esté configurada correctamente.

