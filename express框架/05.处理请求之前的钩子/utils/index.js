function checkLogin(req, res, next){
    console.log("执行接口代码之前会执行这里的代码");
    next();  //直接跳入请求的接口执行代码
}

module.exports = {
    checkLogin
}