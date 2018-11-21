const express = require('express');
const app = express();

const port = 3333;

const api = require('./api/api');

// 静态文件目录托管
app.use(express.static('./www'));

app.use('/api', api);

app.listen(port, () => {
	console.log('在浏览器中打开：localhost:' + port);
});
