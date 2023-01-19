
 const fs = require('fs');
 const {Transform } = require('stream');
 const path = require('path');

 console.log('file name', path.basename(__filename));
 console.log('dir name', path.dirname(__filename));
 console.log('parse', path.parse(__filename));

 const readStream = fs.createReadStream('./originalData.json');
 const writeStream = fs.createWriteStream('./resultData.json');
 readStream.setEncoding('utf8');

 const newTransform = new Transform({
   objectMode: true,
   transform(chunk, enc, callback) {
     callback(null, chunk.toUpperCase());
     console.log(chunk.toUpperCase());
   }
 })

 readStream.pipe(newTransform).pipe(writeStream);