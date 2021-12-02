const express = require('express');

const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

const startServer = ({ port }) => {
  console.log('starting server in port:', port)
  app.listen(port);
};

module.exports = { startServer };
