const express = require('express');

const app = express();

app.listen(3000, function () {
    console.log('servidor iniciado');
  });
app.get('/', function (request, response) {
    console.log('hola en la consola');
    response.sendFile(path.join(__dirname, '/public/index.html'));
  });