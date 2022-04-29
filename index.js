// Llamamos el modulo http
const http = require('http');
//Establecemos la url o IP de nuestro servidor
const hostname = '192.168.56.1';
//Establecemos el puerto de escucha
const port = 3000;
//Creamos una instancia HTTP con un reques y un response
const server = http.createServer((req,res)=> {
    // El servidro respondera un codigo 200
    res.statusCode=200;
    //El servidor respondera con un texto plano
    //res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    //El servidor respondera un hola mundo
    //res.end('Hola Mundo\n');
    res.end('<h1>Hola Mundo\n</h1>');
});


server.listen(port,hostname, () => {
    console.log(`El servidor se esta ejecutando en http://192.168.56.1:3000`);

});