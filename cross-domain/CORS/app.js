const express = require('express');
const app = express();
// 白名单列表，对于这些地址来的请求，允许跨域
const whiteList = ['http://localhost:3000'];

app.use((req, res, next) => {
  const { origin } = req.headers;
  console.log('origin', origin);
  
  if (whiteList.includes(origin)) {
    // 设置允许访问的额源
    res.setHeader('Access-Control-Allow-Origin', origin);
    // 设置允许的方法
    res.setHeader('Access-Control-Allow-Methods', 'PUT');
    // 设置允许添加的请求头
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6);
    if (req.method === 'OPTIONS') {
      // OPTIONS请求不做任何处理
      res.end();
    }
  }
  next();
});

app.put('/getData', (req, res) => {
  res.end('PUT method data');  
});

app.get('/getData', (req, res) => {
  res.end('GET method data');  
});

app.listen(4000, (err) => {
  if (err) { console.log('err:', err); }
  console.log('4000 port is on listenning');
});