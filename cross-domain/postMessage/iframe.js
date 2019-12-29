// 用以指定地址启动页面
const open = require('open');
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(4000);

open('http://localhost:4000', 'chrome');