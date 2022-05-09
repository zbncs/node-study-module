const fs = require('fs')

function callback(err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
}

// destination.txt will be created or overwritten by default.
fs.copyFile('./assets/file.txt', './assets/destination.txt', callback);

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
fs.copyFile('./assets/file.txt', './assets/destination.txt', constants.COPYFILE_EXCL, callback);