import { uploadImage } from "./firebase.js";


const imageInput = document.querySelector('#imageInput');
const uploadButton = document.querySelector('#uploadButton');
const uploadedImage = document.querySelector('#uploadedImage');
const imageUrlInput = document.querySelector('#imageUrl');
const copyUrlButton = document.querySelector('#copyUrlButton');

uploadButton.addEventListener('click', async () => {
    if (imageInput.files.length > 0) {
        try {
            const snapshot = await uploadImage(imageInput.files[0]);
            const downloadURL = snapshot;
            console.log("Imagen subida con éxito:", downloadURL);
            imageUrlInput.value = downloadURL; // Muestra la URL en el campo de entrada
            uploadedImage.src = downloadURL;
        } catch (error) {
            console.error("Error al subir la imagen:", error);
        }
    }
});

// Agrega un manejador de eventos para copiar la URL al portapapeles cuando se hace clic en el botón
copyUrlButton.addEventListener('click', () => {
    imageUrlInput.select();
    document.execCommand('copy');
});

/*
const entrada = document.querySelector('#image');
entrada.addEventListener('change', (e) => {
    uploadImage(e.target.files[0]);
});
*/