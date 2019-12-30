// 用以指定地址启动页面
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(4000);