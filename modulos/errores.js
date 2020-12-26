function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi funcion asincrona");
      cb(err);
    }
  });
}
try {
  //otraFuncion();
  seRompeAsincrona(function (err) {
    console.log(err.message);
  });
} catch (err) {
  console.error("Vaya algo se ha roto...");
  console.error(err.message);
}
console.log("Esto de aqui esta al final");
