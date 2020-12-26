const { exec, spawn } = require("child_process");
// La linea es lo mismo que const exec = require('child_process').exec;

// exec("ls -la", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);

proceso.stdout.on("data", function (dato) {
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("El proceso termino");
  console.log(proceso.killed);
});
