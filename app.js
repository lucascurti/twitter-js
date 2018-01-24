const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
var bodyParser = require('body-parser');

const app = express(); // crea una instancia de una aplicación de express
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
// nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates
nunjucks.configure('views', { noCache: true });

app.use(morgan('tiny'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', routes);

// app.use('/special', function(req, res, next) {
//   // haz tu logueo aquí
//   console.log('haz llegado al area magica');
//   // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
//   next();
// });

// app.get('/', function(req, res) {
//   const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];
//   res.render('index', { title: 'Hall of Fame', people: people });
// });

app.listen(3000);
