import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

    const firebaseConfig = {
        apiKey: "AIzaSyDtO44v0BYXzuIAK1PYsDqDM8MM-TAYzOU",
        authDomain: "mechanik-samochodowy.firebaseapp.com",
        databaseURL: "DATABASE_URL",
        projectId: "mechanik-samochodowy",
        storageBucket: "mechanik-samochodowy.appspot.com",
        messagingSenderId: "798280677857",
        appId: "1:798280677857:web:164c5151ab096bfe61faa0",
        measurementId: "G-C9Z70DL009"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

build


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const FIREBASE_TOKEN = "1//0cxYg_zb-U1i5CgYIARAAGAwSNwF-L9Iro6pLQue_CzlmryginNLseTAq-dKt1ZX6cEvC9OFRZPVGnB37lCg-j3AlTQOpUB1pOHk"
