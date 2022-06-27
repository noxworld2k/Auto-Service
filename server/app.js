const express = require('express');
const createError = require('http-error');
const app = express();
const path = require('path');
// Ustawienia portu
const PORT =  process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index')
const userRoutes = require('./routes/users');
const client = require('./db/config');

app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', indexRouter);
app.use('/users', userRoutes);

app.use(function(req, res, next) {
    next(createError(404, 'Not Found'));
})
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})



app.listen(PORT, 'localhost', (err) => {
    console.log(err = null);
    console.log('Listening on port ' + PORT);
});
userRoutes(app);



app.get('/', (req, res) => {
    const {visitor_name} = req.cookies;
    if (visitor_name) {
        res.send(`Witaj, ${visitor_name}`);
        } else {
        res.send(`Witaj, Nieznajomy!`);
    }
})


// ustawienie domyślnej lokalizacji plików
// app.use(express.static(path.join(__dirname + '/public')));

// app.use(express.json());
//
// app.post('/hello', (req, res) => {
//
//     const {name, surname} = req.body;
//
//     res.send(`Witaj ${name} ${surname}`);
//
// })
//
//
//


//Wylogownie użytkownika z systemu - usunięcie ciasteczek=
// app.get('/logout', (req, res) => {
//     res.clearCookie('userLooged');
//     res.send("Pomyślnie wylogowano");
//     res.end();
// })




// app.get('/hi/:name', (req, res) => {
//
//     const {name} = req.params;
//     const dt = new Date();
//
//
//     res.cookie('visitor_name', name,{
//         maxAge: 5 * 60 * 1000
//     });
//     res.send('Imię zapisano');
//
// });
//
// app.get('/hi/:name', (req, res) => {
//
//     const {name} = req.params;
//     const dt = new Date();
//     // Ustawienie ciasteczek na 7 dni
//     dt.setDate(dt.getDate() + 7);
//
//     res.cookie('visitor_name', name,{
//         expires: dt
//     });
//     res.send('Imię zapisano');
//
// });




// ściąganie pliku
// app.get('/', (req,  res) => {
//     const filename = "Noxworld.png";
//     res.download(path.join(__dirname, filename))
// })

//
// app.get('/', (req, res ) => {
//     const fileName = 'logo.png';
//     res.sendFile(fileName);
//     res.attachment('logo.png', {
//         root: path.join(__dirname, 'images'),
//     });
//     res.end();
// })
//


// app.get('/', (req, res ) => {
//     const fileName = 'logo.png';
//     res.sendFile(fileName,  {
//         root: path.join(__dirname, 'images'),
//         lastModified: false,
//         dotfiles: false,
//     });
// })

//przesyłanie pliku np img
// app.get('/', (req, res ) => {
//     const fileName = 'logo.png';
//     res.sendFile(fileName,{
//         root: path.join(__dirname, 'images')
//
//     });
// })


// Redirect na inna stronę/podstronę
// app.get ('/', (req, res) => {
//   res.redirect('https://google.com');
//
//     res.location('https://google.com')
//     res.sendStatus(302);
//    })

//
// app.get('/1', (req) => {
//     console.log('Informacja o osobie o id 1');
// })
//
// app.post ('/', (req) => {
//     console.log('dodawanie nowej osoby')
// })
//
// app.patch('/1', (req) => {
//     console.log('aktualizacja obiektu od id1')
// })
//
// app.delete ('/', (req) => {
//     console.log('usuwanie ID')
// })

module.exports = app;