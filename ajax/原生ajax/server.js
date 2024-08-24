//引入express
const express = require("express");
//2.创建应用对象
const app = express();

//3.创建路由规则

app.get('/server',(requset,response)=>{
    //请求方式 设置响应头，设置允许跨域!!!
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send("hello world!!!");

});
app.post('/post',(requset,response)=>{
    //请求方式 设置响应头，设置允许跨域!!!
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send("hello world!!!");

});
//4.监听端口
app.listen(8000,()=>{
    console.log("服务已经启动!!8000端口监听中.............");
    
})