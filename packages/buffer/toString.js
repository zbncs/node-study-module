// The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object
let buf2 = Buffer.from('你好啊！你好')

console.log(buf2);
// 一个汉字占用三个字节，从1开始会乱码
console.log(buf2.toString('utf-8', 1, 20));
console.log(buf2.toString('utf-8', 3));

