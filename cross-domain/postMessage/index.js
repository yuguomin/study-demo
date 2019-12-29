// 用以指定地址启动页面
const open = require('open');
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(3000);

open('http://localhost:3000', 'chrome');