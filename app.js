const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/admin');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.set('view engine', 'ejs');
app.set('view engine', 'pug');
app.set('views', 'views');

app.use('/admin', router);
app.use(express.static(path.join(__dirname, '/public')));

app.use((req, resp, next) => {
    // resp.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    resp.status(404).render('404', {pageTitle: 'Page Not Found'}); // ejs or pug
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});