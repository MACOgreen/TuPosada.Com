import firebase from "firebase/app";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = { 
    apiKey: "AIzaSyBtFAQWVvK_kl5LASad7KauZ0XWHkY8Q4Q",
    authDomain: "tuposada-com.firebaseapp.com",
    projectId: "tuposada-com",
    storageBucket: "tuposada-com.appspot.com",
    messagingSenderId: "386800650854",
    appId: "1:386800650854:web:c492dd7b0695c88bb17ba7"
}

const app = firebase.initializeApp(firebaseConfig);

// Database instance
export const db = app.firestore();

// Authentication instance
export const auth = app.auth();

//Proveedor de Google
export const googleProvider = new firebase.auth.GoogleAuthProvider();

//Proveedor de Facebook
export const facebookProvider = new firebase.auth.FacebookAuthProvider();