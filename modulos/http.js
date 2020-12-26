const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  // Request y Response
  console.log("Nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, qué tal");
      res.end();
      break;
    default:
      res.write("Error 404");
      res.end();
  }

  // Escribir una cabecera
  // res.writeHead(201, { "Content/Type": "text/plain" });

  // Escribir respuesta al usuario
  // res.write("Hola ya se usar http de NodeJS");
}

console.log("Escuchando http en el puerto 3000");
