const server = require('http')
const host = 'localhost' //127.0.0.1
const port = 3000 



const servidor = server.createServer(request)
servidor.listen(port, host, ()=>{
    console.log(`Servidor iniciado en http://${host}:${port}`)
})