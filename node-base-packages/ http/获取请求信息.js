const url = require('url');
const http = require('http')
const server = http.createServer((request, response)=>{
    console.log("---------------url---------------");
    let requestUrl = request.url;  // 获取本次请求的资源路径
    console.log(requestUrl);

    console.log("--------------method----------------");

    let method = request.method;  // 获取本次请求的方式
    console.log(method);

    console.log("------------get------------------");

    let obj = url.parse( requestUrl, true);
    console.log(obj.query);    // 获取get请求的查询字符串    
    //  localhost:8080?name=nodejs&age=11   get请求

    console.log("---------------post---------------");

    //当存在 post 提交数据 data 事件立马执行，postData就是提交过来的数据对象
    request.on('data',(postData) => {   // 获取post请求的请求参数
        console.log(111, postData.toString());
    });

    console.log("---------------response---------------");

    response.write("hello nodejs");  // 书写响应体内容
    response.end()   //发生响应到浏览器  当我们修改代码后，需要重新执行该文件，重启服务
});

server.listen(8082, (error) => {
    console.log('Server running at http://127.0.0.1:8082/');
})
