const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (request, response) {
    console.log('hola en la consola');
    response.sendFile(path.join(__dirname, '/public/index.html'));
  });

app.listen(3000, function () {
    console.log('servidor iniciado');
  });
