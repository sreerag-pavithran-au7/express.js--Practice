const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Error 404</h1>');
});


app.listen(3000);