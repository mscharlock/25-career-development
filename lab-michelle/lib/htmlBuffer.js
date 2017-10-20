'use-strict';

const fs = require('fs');
let domTree = module.exports = {};

fs.readFile('../assets/minimal.html', (err, data) => {
  console.log(data);
});

//
// module.exports = function HtmlBuffer (buffer) {
//   this.allData = buffer;
//   this.type = buffer.toString('utf-8', 0, buffer.length);
//   //We should think about converting this to some kind of endian here//
// };
