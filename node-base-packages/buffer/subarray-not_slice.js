let buf2 = Buffer.from('你好啊！你好')

// console.log(buf2);
// 一个汉字占用三个字节，从1开始会乱码
let s = buf2.slice();
// console.log(s.toString());
s = s.slice(3)
// console.log(s.toString());


// subarray
let b2 = buf2.subarray();
console.log(b2.toString())

// 乱码了
b2 = b2.subarray(1);
console.log(b2.toString());

