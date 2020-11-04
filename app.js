const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()

const server = http.Server(app)
const io = socketio(server)
let mapping = []

app.use('/', express.static(__dirname + '/static'))

io.on('connection', (socket) => {
    console.log('connection')
        // socket.emit('success', {
        //     msg: 'connected'
        // })

    // socket.on('btn-clicked', () => {
    //     console.log('hello')
    //     socket.emit('click-success')

    // })
    socket.on('sending msg', (data) => {
        console.log(socket.id + data.msg)
        io.emit('recieved', {
            msg: data.msg,
            name: mapping[socket.id]
        })
    })
    socket.on('login', (data) => {
        mapping[socket.id] = data.name
        socket.emit('login-success', () => {

        })
    })

})


server.listen(4444, () => {
    console.log('server started')
})