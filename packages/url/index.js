const {URL} = require('url');

const pathPub = 'http://www.baidu.com?a=123&b=456&c=哈哈哈'

const url = new URL(pathPub);


function getParams(path, name) {
    const {URL} = require('url');
    const url = new URL(path);
    return url.searchParams.get(name);
}

console.log(getParams(pathPub, 'b'))





