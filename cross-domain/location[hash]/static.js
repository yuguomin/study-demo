// 用以指定地址启动页面
const open = require('./node_modules/open');
const express = require('./node_modules/express');
const app = express();
app.use(express.static(__dirname));
app.listen(3000);

open('http://localhost:3000', 'chrome');