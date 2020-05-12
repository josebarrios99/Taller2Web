const express = require('express');

const path = require('path');

const exphbs = require('express-handlebars');

const products = require('./products')

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname, '/public/index.html'));
  });

  app.get('/store', function (req, res) {
    var context={
      products:products
    }
    res.render('games', context);
  });
  app.get('/product/:name/:id', function (req, res) {
    var context = {};
    var foundElement =  products.find(function(elem){
      if(elem.title == req.params.name){
        return true;
      }
    });
    context = foundElement;
    res.render('product', context);
  });

app.listen(3000, function () {
    console.log('servidor iniciado');
  });
