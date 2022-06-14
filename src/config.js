
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsmAsR1Q6i3zio1xkb5N1fgtlATgSKBY4",
    authDomain: "auto-service-nox.firebaseapp.com",
    projectId: "auto-service-nox",
    storageBucket: "auto-service-nox.appspot.com",
    messagingSenderId: "893528482779",
    appId: "1:893528482779:web:3b807210bff061f1527dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

