let suma = 0;

console.time("todo");
console.time("contador");
for (let i = 0; i < 100000000; i++) {
  suma += 1;
}

console.timeEnd("contador");

let suma2 = 0;

console.time("contador2");
for (let j = 0; j < 100000000; j++) {
  suma += j;
}

console.timeEnd("contador2");
console.timeEnd("todo");

console.time("asincrono");
function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Termina el proceso asincrono");
      resolve();
    });
  });
}
console.log("Comienza el proceso asincrono");
asincrona().then(() => {
  console.timeEnd("asincrono");
});
