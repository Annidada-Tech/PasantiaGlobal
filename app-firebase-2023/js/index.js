import { crearRegistro} from './firebase.js';
import { alerta } from './alerta.js';


window.addEventListener('DOMContentLoaded', () => {
    
    
});



const registrar = document.getElementById('registrar-usuario');
registrar.addEventListener('click', (e) => {
    
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
