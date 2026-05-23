import express from 'express'
import logger from 'morgan'

import { Server } from 'socket.io';
import { createServer } from 'node:http'

// Definimos el puerto
const port = process.env.PORT ?? 3000

// inicializamos el servidor
const app = express()
const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado')

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado')
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

app.use(logger('dev'))

// Le enviamos al cliente la página principal cuando solicita localhost:3000
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
})

// Nos quedamos escuchando en el puerto definido
server.listen(port, () => {
    console.log(`Conexión al websocket en el puerto ${port}`)
})