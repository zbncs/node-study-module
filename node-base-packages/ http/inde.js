var http = require('http');
http.createServer(function (req, res) {
    // 获取客户端传递的信息 req
    // req.url URL参数

    // 设置响应头
    res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
    // 向页面写入内容
    res.write('哈哈哈😂')
    // 结束响应，参数写入页面
    res.end('Hello World');
}).listen(8081, (err) => {
    console.log('Server running at http://127.0.0.1:8081/');
});
