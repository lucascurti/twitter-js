const express = require('express');
const morgan = require('morgan');

const app = express(); // crea una instancia de una aplicación de express

app.use('/', function(req, res, next) {
  // haz tu logueo aqui
  // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
  next();
});
app.use(morgan('tiny'));

app.use('/special', function(req, res, next) {
  // haz tu logueo aquí
  console.log('haz llegado al area magica');
  // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
  next();
});

app.get('/', function(req, res) {
  res.send('Welcome');
});

app.listen(3000);
