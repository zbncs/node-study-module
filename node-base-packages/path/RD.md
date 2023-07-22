# path

## windows 和 posix 路径差异

windows 路径：C:\\temp\\myfile.html
posix路径：/tmp/myfile.html

在windows上：

```js
    path.basename('C:\\temp\\myfile.html');
    // 返回: 'myfile.html'
```

在posix上：

```js
    path.basename('C:\\temp\\myfile.html');
    // 返回: 'C:\\temp\\myfile.html'
```

当使用 Windows 文件路径时，若要在任何操作系统上获得一致的结果，则使用 path.win32.xxx
当使用 POSIX 文件路径时，若要在任何操作系统上获得一致的结果，则使用 path.posix.xxx





