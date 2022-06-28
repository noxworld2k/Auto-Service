const express = require('express');
const app = express();
const client = require('../db/config');


usersRoutes =  app.post("localhost:3000/:userName/email/:userEmail" , (req, res) => {
    async function addData() {
        client.db.users.insert({
            userName: req.params.userName,
            email: req.params.userEmail
        });
    }
    res.send(`Zarejestrowano użytkownika ${req.params.userName} ${req.params.userEmail}`);

});


module.exports = usersRoutes;



