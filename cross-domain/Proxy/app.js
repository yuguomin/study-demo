const express = require('express');
const app = express();

const data = { title: 'Proxy', status: 'ok' }

// 我很简单，不操心
app.use('/', (req, res) => {
  if (req.url === '/') {
    console.log('requert query:', req.query);
    res.end(JSON.stringify(data))
  }
});

app.listen(3001, (err) => {
  if (err) { console.log('err:', err); }
  console.log('3001 port is on listenning');
});
