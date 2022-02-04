// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbhJMIvswcYIJ321ek_7Kj9WYsF5VRtdk",
    authDomain: "houseoffer-63e43.firebaseapp.com",
    projectId: "houseoffer-63e43",
    storageBucket: "houseoffer-63e43.appspot.com",
    messagingSenderId: "884781562224",
    appId: "1:884781562224:web:8ab023fb36310ca7ce77b5"
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

