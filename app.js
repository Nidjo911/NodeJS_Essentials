// setup the env file first
//const dotenv = require('dotenv').config();
/* const bodyParser = require('body-parser'); */ //need to install
// either defined in env file or 3k by default!
const PORT = process.env.PORT || 3000;

/* Need package json t o get install metadata */
/* Initial stuff to get http requests */
const express = require('express');
const app = express();

const shakerRoutes = require('./routes/mssg');

/* app.use(bodyParser.json()); */
app.use(shakerRoutes);
/* Code to initialize memory variables (temporary) */

// Middleware setup
app.use(express.static('public')); // serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing form data

// View engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

// home router: for basic stuff - on loading
const homeRoutes = require('./routes/home');
app.use(homeRoutes);

// require the mssg route: the initialization part
/* const mssgRoutes = require('./routes/mssg');
app.use('/mssgs', mssgRoutes); */

// listen to incoming requests
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});