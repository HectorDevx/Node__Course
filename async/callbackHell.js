function hola(nombre, miCallback) {
  // console.log("Hola, soy una función asincrona");
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Te quiero mucho...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios, " + nombre);
    otroCallback(nombre);
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    callback(nombre);
  }
}

// --

console.log("Iniciando Proceso...");

hola("Angélica", function (nombre) {
  conversacion(nombre, 5, function () {
    adios(nombre, function () {
      console.log("Terminando proceso...");
    });
  });
});

// Callback Hell
// hola("Héctor", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("Terminando Proceso...");
//         });
//       });
//     });
//   });
// });
