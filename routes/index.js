const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function(io) {
  router.use(express.static('public'));

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find(o => o.name === name);
    res.render('index', { tweets: tweets, showForm: true, name: name });
  });

  router.get('/tweets/:id', function(req, res) {
    var id = req.params.id;
    var tweets = tweetBank.find(o => o.id === Number(id));
    res.render('index', { tweets: tweets });
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    var newTweet = tweetBank.add(name, text);
    io.sockets.emit('newTweet', newTweet);
    res.redirect('/');
  });

  router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true });
  });
  return router;
};
