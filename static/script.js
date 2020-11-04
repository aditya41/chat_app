const socket = io()

setTimeout(() => {
    // socket.on('success', () => {
    // console.log(socket.id)
    // })
}, 1000);



$(() => {
    $('#chat').hide()
    $('#btn1').click(() => {
        socket.emit('login', {
            name: $('#inp1').val()
        })
    })
    $('#btn').click(() => {
        socket.emit('sending msg', {
            msg: $('#inp').val()
        })
    })
    socket.on('recieved', (data) => {
        $('#list').append(
            $('<li>').text(data.name + ' ' + data.msg)
        )
    })
    socket.on('login-success', () => {
        $('#chat').show()
        $('#login').hide()
    })
})