const http = require('http');
const express = require('express');
const app = express();

app.use('/', (req, res) => {
  if (req.url !== '/') { return; }
  // 利用CORS保证页面请求可以不被跨域拦截
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  });
  // 去请求另外一个服务器
  http.request(
    {
      host: '127.0.0.1',
      port: 3001,
      url: '/',
      method: req.method,
      headers: req.headers
    },
    (serverResponse) => {
      // 收到目标服务器的响应后把结果返回给页面
      var body = ''
      serverResponse.on('data', chunk => {
        body += chunk
      })
      serverResponse.on('end', () => {
        console.log('The data is ' + body)
        // 第四步：将响应结果转发给浏览器
        res.end(JSON.stringify(body))
      })
    }
  )
    .end()
});

app.listen(3000, (err) => {
  if (err) { console.log('err:', err); }
  console.log('3000 port is on listenning');
});
