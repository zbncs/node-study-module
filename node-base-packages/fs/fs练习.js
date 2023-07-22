// 找出www目录下的所有子目录

const fs = require('fs');

function findPath(pathPub) {
    const pathArr = [];

    function get(i, files) {
        return new Promise((resolve, reject) => {
            fs.stat(pathPub + files[i], (err, data) => {
                if (err) {
                    reject(err)
                }
                else {
                    if (data.isDirectory()) {
                        resolve(files[i]);
                    }
                    else {
                        resolve();
                    }
                }
            })
        }) 
    }

    return new Promise((resolve, reject) => {
        fs.readdir(pathPub, async (err, files) => {
            if (err) {
                reject(err)
            }
        
            for (var i = 0; i < files.length; i++) {
                const newFile = await get(i, files);
                if (newFile) {
                    pathArr.push(newFile);
                }
                
            }
            resolve(pathArr)
        })
    })
}

const pathPub = './www/';
findPath(pathPub).then((res) => {
    // console.log(1212, res)
})


function findPath1(pathPub) {
    const pathArr = [];
    function isDir(path) {
        return new Promise((resolve, reject) => {
            fs.stat(path, (err, stats) => {
                if (err) {
                    reject(err);
                }

                if (stats.isDirectory()) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            })
        })
    }

    return new Promise((resolve, reject) => {
        fs.readdir(pathPub, async (err, files) => {
            if (err) {
                reject(err);
            }
    
            for (let i = 0; i < files.length; i++) {
                if (await isDir(pathPub + files[i])) {
                    pathArr.push(files[i])
                }
            }
            resolve(pathArr);
        })
        
    })
    
}

const pathPub1 = './www/';
findPath1(pathPub1).then(res => {
    console.log(999, res)
})








