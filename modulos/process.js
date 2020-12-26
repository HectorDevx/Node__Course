// No es necesario requerirlo porque es global.
// const process = require ('process')

process.on("beforeexit", () => {
  console.log("El proceso va a terminar");
});

// Exit desconecta el proceso del Eventloop, no se llevará acabo nada más
process.on("exit", () => {
  console.log("El proceso acabó");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca.");
  });
});

process.on("uncaughtException", (err, origen) => {
  console.log("Se olvido capturar un error.");
  console.error(err);
});

// funcionQueNoExiste()
