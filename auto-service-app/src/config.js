
const config = {
    apiKey: "AIzaSyDtO44v0BYXzuIAK1PYsDqDM8MM-TAYzOU\n",
    projectId: "mechanik-samochodowy",
    databaseURL: "DATABASE_URL",
    authDomain: "AUTH_DOMAIN",

    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID"
};


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

