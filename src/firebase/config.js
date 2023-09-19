
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvfU-43gm2UFxOPpk1op1u9hWPzdCzF-o",
  authDomain: "comision31165.firebaseapp.com",
  projectId: "comision31165",
  storageBucket: "comision31165.appspot.com",
  messagingSenderId: "821733993785",
  appId: "1:821733993785:web:3bdcf2038a85c6d384cce8"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
} 