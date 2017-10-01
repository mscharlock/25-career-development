//Pseudocode:
//1. Read the doc into a buffer//
//2. Parse the buffer into a string//
//3. Somehow pick out the "root element", which is the <html> tag, which we will assign to be the first Tree Node - we have to convert it into a node too?//
//4. Make it then build the tree//

//BIG O NOTATION OF THIS SOLUTION IS...?//

//We need the file system//
const fs = require('fs');
//we need the html file//


fs.readFile('./assets/minimal.html', (err, data) => {
  if(err) console.error(err);
  console.log(data);
  let stringBuffer = Buffer.from(data);
  console.log(stringBuffer);
});

//use the node fs module to read an HTML document into a buffer (minimal.html => found in the /assets dir)
//parse the buffer and use the root <html> element, subsequent HTML tags, and their text content to build a tree data structure
//hint: you will need to refactor your node to allow a different type of data to be stored in the .value property. The remainder of the node should not change//
