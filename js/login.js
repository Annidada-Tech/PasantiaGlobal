import { obtenerRegistros} from './firebase.js';
import { alerta } from './alerta.js';

/*
window.addEventListener('DOMContentLoaded', async () => {
    
    
    );
});
*/

const entrar = document.querySelector('#login-in');
entrar.addEventListener('click', async(e) => {
    e.preventDefault();
    const usuario = document.querySelector('#nombre-usuario').value;
    const password = document.querySelector('#password-usuario').value;
    const querySnapshot = await obtenerRegistros(); 
        querySnapshot.forEach(doc => {
        let registros = doc.data();
        console.log(registros);
        
        if(usuario === registros.user && password === registros.password && registros.rol === 'admin'){
            
            //console.log('bienvenido');
            //almaceno el rol del usuario en el localstorage
            localStorage.setItem('rol', registros.rol);
            window.location.href = "/view/adminGeneral.html";
            alerta('Bienvenido');
        }else if(usuario === registros.user && password === registros.password && registros.rol === 'editor'){
            
            //console.log('bienvenido');
            //almaceno el rol del usuario en el localstorage
            localStorage.setItem('rol', registros.rol);
            window.location.href = "/view/editor.html";
            alerta('Bienvenido');
        }else{
            alerta('Usuario o contraseña incorrectos');
            //console.log('usuario o contraseña incorrectos');
        }
    });
    
    /*
    
    */
});