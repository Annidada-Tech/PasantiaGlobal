  // Import the functions you need from the SDKs you need
import { v4 } from "https://jspm.dev/uuid";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDGlnkz-uDZutFHNw_YsMkq8knf92pyHLg",
    authDomain: "app-storage-annidada.firebaseapp.com",
    projectId: "app-storage-annidada",
    storageBucket: "app-storage-annidada.appspot.com",
    messagingSenderId: "665077603457",
    appId: "1:665077603457:web:4b95386cc53beb35a0c180"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);

export async function uploadImage(file) {
    const storage_ref = ref(storage, v4());
    await uploadBytes(storage_ref, file);
    const url = await getDownloadURL(storage_ref);
    return url;
}
