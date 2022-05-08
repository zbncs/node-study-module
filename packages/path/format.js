// path.format(pathObj), pathObj = {dir: string, root: string, base: string, name: string, ext: string}

// 当向 pathObject 提供属性时，存在一个属性优先于另一个属性的组合：
// 如果提供 pathObject.dir，则忽略 pathObject.root
// 如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name；如果未指定 `base`，则将使用 `name` + `ext`。

// path.format() 方法从对象返回路径拼接字符串。 这与 path.parse() 相反。

const path = require('path');

const path1 = path.format({
    dir: '/a',
    root: '/b',
    base: 'a.html',
    name: 'a',
    ext: '.md'
});

const path2 = path.format({
    root: '/user',
    base: '/a/b.md',
})



console.log(123, path1, path2);




