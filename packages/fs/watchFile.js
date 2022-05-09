// 监控文件的变动
const { watchFile } = require("fs");

watchFile('./assets/mes.txt', {interval: 20}, (cur, pre) => {
    if (cur.mtime !== pre.mtime) {
        console.log('文件被修改了');
    }
})

// unwatchFile 取消监控