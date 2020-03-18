const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  // console.log(window.document);
  res.writeHead('200', {'content-type': 'text/html'});
  res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
}).listen(3000, () => {
  console.log('listen on 3000');
})