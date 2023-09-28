const http = require('http');
const port = 3004;

const tasks = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Lavar los platos', completed: true },
    { id: 3, description: 'Limpiar la casa', completed: false }
]

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(tasks))
})

server.listen(port, (req,res)=>{
    console.log(`Server running on port ${port}`);
})