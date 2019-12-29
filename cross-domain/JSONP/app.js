const express = require('express');
const app = express();
const portNumber = '3000';

app.get('/say', function (req, res) {
  const { text, callback } = req.query;
  console.log(text);
  console.log(callback);
  res.end(`${callback}('Hello')`)
});

app.listen(portNumber, (err) => {
  if (err) { console.log('err:', err); }
  console.log('3000 port is on listenning');
});