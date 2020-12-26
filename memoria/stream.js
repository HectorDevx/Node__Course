// Stream de Lectura
const fs = require("fs");
const { Transform } = require("stream");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding("UTF8");
// readableStream.on("data", function (chunk) {
//   data += chunk;
// });

// readableStream.on("end", function () {
//   console.log(data);
// });

// process.stdout.write("hola");
// process.stdout.write("que");
// process.stdout.write("tal");

const transform = stream.transform;

function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

var mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
