function hola(nombre, miCallback) {
  // console.log("Hola, soy una función asincrona");
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios, " + nombre);
    otroCallback(nombre);
  }, 1000);
}

console.log("Iniciando Proceso...");

hola("Héctor", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando Proceso...");
  });
});

// hola("Carlos", function () {});
// adios("Carlos", function () {});
