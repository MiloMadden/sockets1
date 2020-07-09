const { io } = require('../server');

io.on('connection', function(client){
    console.log('Usuario conectado' /*, client */)

    client.on('disconnect', function(){
        console.log('Usuario desconectado');
    })

    // escuchar al cliente
    client.on('mensaje', function(data, callback){
        
        console.log(data);

        // client.broadcast.emit('mensaje', {objeto})
        if(data.usuario){
            callback({
                mensaje: 'Todo salio bien!!!!!'
            });
        }else{
            callback({
                mensaje: 'Hubo un error'
            })
        }

    })

    // emitir al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin', 
        mensaje: 'Bienvenido a mi aplicacion'
    })

})