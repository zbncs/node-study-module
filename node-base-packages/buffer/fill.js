let buffer1 = Buffer.alloc(6);

// 当填充的数据小于buffer的长度时，会重复填充
buffer1.fill('111');

console.log(buffer1); // <Buffer 31 31 31 31 31 31>
console.log(buffer1.toString()) // 111111

// 当填充的数据大于buffer的长度时，会截取掉多余的字符串
let buffer2 = Buffer.alloc(6);
buffer2.fill('123456789');

console.log(11, buffer2); // <Buffer 31 32 33 34 35 36>
console.log(11, buffer2.toString()); // 123456

// 
let buf = Buffer.alloc(3)

// 第二三参数是从哪填充到哪，不包括末尾
buf.fill(123, 1, 3);

console.log(11, buf);
console.log(11, buf.toString());



