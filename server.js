const express = require('express');

const path = require('path');

const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/home', function (request, response) {
    console.log('hola en la consola');
    response.sendFile(path.join(__dirname, '/public/index.html'));
  });

  app.get('/store', function (req, res) {
    res.render('games');
  });

app.listen(3000, function () {
    console.log('servidor iniciado');
  });
