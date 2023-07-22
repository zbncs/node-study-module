let buf1 = Buffer.alloc(6);

// 只填充当前数据。
// 当填充的数据小于buffer的长度时, 
// 也不会重复填充剩下空间
buf1.write('123');

console.log(buf1);
console.log(buf1.toString());

// 第二三参数是从哪填充到哪,包括末尾
// 长度不够就截掉

let buf2 = Buffer.alloc(6)
buf2.write('123', 1, 3);
console.log(buf2);
console.log(buf2.toString());

// Buffer.from 把参数转成Buffer

let buf3 = Buffer.from('hello');
console.log(buf3);
console.log(buf3.toString());

