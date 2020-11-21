console.log("Algo");
console.info("Otro algo");
console.error("Errores");
console.warn("Avisos");

var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "A",
  },
];
console.table(tabla);

console.group("Conversación:");
console.log("Hola");
console.log("Blablablabla");
console.log("Adios");
console.groupEnd("Conversación:");

console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");
