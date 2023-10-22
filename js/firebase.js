
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3MUYGVtcKjVuQOGUOEmiDGy5PX3ulnnU",
    authDomain: "app-interareas-2023.firebaseapp.com",
    projectId: "app-interareas-2023",
    storageBucket: "app-interareas-2023.appspot.com",
    messagingSenderId: "707021008333",
    appId: "1:707021008333:web:d14a331fb22f50744fa884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//funcion que crea un registro en la base de datos de firebase
export const crearRegistro = (nombre, apellido, usuario, password, rol) => {
    //console.log(nombre, apellido, email, password, rol);
    addDoc(collection(db, "usuarios"), {
        nombre: nombre,
        apellido: apellido,
        user: usuario,
        password: password,
        rol: rol
    })
}

export const obtenerRegistros = () => getDocs(collection(db, "usuarios"));

// Función que crea un registro en la base de datos de Firebase para beneficios
export const crearRegistroBeneficios = async (titulo, categoria, contenido, imagen) => {
    try {
        const docRef = await addDoc(collection(db, "beneficios"), {
            imagen: imagen,
            titulo: titulo,
            categoria: categoria,
            contenido: contenido
        });
        console.log("Registro de beneficio creado con ID: ", docRef.id);
        // Puedes realizar otras acciones después de guardar, si es necesario
    } catch (error) {
        console.error("Error al crear el registro de beneficio: ", error);
    }
}