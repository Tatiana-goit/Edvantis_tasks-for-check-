
 const fs = require('fs');
 const {Transform } = require('stream')

 const readStream = fs.createReadStream('./originalData.json');
 const writeStream = fs.createWriteStream('./resultData.json')
 readStream.setEncoding('utf8')

 const newTransform = new Transform({
   objectMode: true,
   transform(chunk, enc, callback) {
     callback(null, chunk.toUpperCase())
     console.log(chunk.toUpperCase());
   }
 })

 readStream.pipe(newTransform).pipe(writeStream)