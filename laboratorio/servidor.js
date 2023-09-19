const chalk = require('chalk');
const http = require('http'); 

const host  = 'localhost'; 
const puerto = 8000; 

const servidor = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        nombre: 'Brayan cabrera diez', mensaje: 'Hola desde node'
    }))
})

servidor.listen(puerto, host, ()=>{
const mensaje = `el servidor se encuentra corriendo en http://${host}:${puerto}`;
console.log(chalk.green(mensaje))
})