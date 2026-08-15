const fs = require('fs');

fs.writeFile('Demo.txt', 'This is File System module demo.\n', function (err) {
  if (err) throw err;
  console.log('File created and data written.');

  // 2
  fs.appendFile('demo.txt', 'Data appended using fs module.\n', function (err) {
    if (err) throw err;
    console.log('Data appended.');

    // 3
    fs.readFile('demo.txt', 'utf8', function (err, data) {
      if (err) throw err;
      console.log('File Content:\n' + data);

      // 4
      fs.unlink('demo.txt', function (err) {
        if (err) throw err;
        console.log('File deleted');
      });
    });
  });
});