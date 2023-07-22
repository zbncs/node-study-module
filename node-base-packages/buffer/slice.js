let buf2 = Buffer.from('你好啊！你好')

console.log(buf2);
// 一个汉字占用三个字节，从1开始会乱码
let s = buf2.slice();
console.log(s.toString());
s = s.slice(3)
console.log(s.toString());





