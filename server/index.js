// const express = require("express");
// const PORT = process.env.PORT || 3001;
// const PUBLIC_URL = process.env.PUBLIC_DIR || "public";
// const app = express();
// const API = "http://localhost:3000";
//
//
// app.get('/', (req, res) => {
//     res.send('root')
// })
//
// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });
//
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// allows us to make calls to firestore on our local network


admin.initializeApp({
    credentials: admin.credential.cert(require('fileToPath(admin.json)')),
    databaseURL: "https://www.blahblah.com"
})

// you'll need to install express first
const express = require('express');
const admin = require("firebase-admin");
const app = express();

app.get('/helloWorld', (req, res) => {
    res.send('Hello world');
})

exports.api = functions.https.onRequest(app);