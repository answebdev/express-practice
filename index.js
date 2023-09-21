// The Express + Node.js Handbook – Learn the Express JavaScript Framework for Beginners [2022 Edition]:
// https://www.freecodecamp.org/news/the-express-handbook/

// To run: nodemon index.js OR node index.js
const express = require('express');
const app = express();

app.set('view engine', 'pug');

// The send() method of the Response object is used to send a simple string as a response.
// app.get('/', (req, res) => res.send('Hello World!'));

// To send an HTML file.
app.get('/', (req, res) => {
    // If 'index.html' is in the root:
    // res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/resources', (req, res) => {
    res.sendFile(__dirname + '/public/resources.html');
});

app.get('/about', (req, res) => {
    // The 'about' route goes to the Pug template page.
    // Pug variable: 'name' (used in 'about.pug')
    res.render('about', { name: 'Pug Page' });
});

// This route will take you to the 'test.pdf' download page -
// The 'test.pdf' file is in in the root, thus the path '.test.pdf'.
// When this file is downloaded, the file will be called 'user-facing-filename.pdf' (second argument),
// though it can be alled anything.
app.get('/download', function (req, res) {
    res.download('./test.pdf', 'user-facing-filename.pdf');
});

app.listen(3000, () => console.log('Server ready...'));