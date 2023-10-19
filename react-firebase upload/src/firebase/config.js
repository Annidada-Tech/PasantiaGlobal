import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyDL2H_g8sqpd3kCIilaor1BwUeekrLSocU",
  authDomain: "react-firebase-tutorial-8fd10.firebaseapp.com",
  projectId: "react-firebase-tutorial-8fd10",
  storageBucket: "react-firebase-tutorial-8fd10.appspot.com",
  messagingSenderId: "695911367868",
  appId: "1:695911367868:web:90701ebb0764a0fee2bcb9"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file){
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = getDownloadURL(storageRef)
    return url
}