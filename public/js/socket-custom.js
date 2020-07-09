        // SOCKETS EN EL FRONT END
        var socket = io();
        //escuchar
        socket.on('connect', function(){
            console.log('conectado al servidor');
        });
        // escuchar
        socket.on('disconnect', function(){
            console.log('paila conexion');
        });

        // enviar info - emitir desde el cliente al servidor
        socket.emit('mensaje', {
            usuario: "Camilo", 
            mensaje: "Hola mundo!!!!!"
        }, function(resp){
            console.log(resp);
        })

        // escuchar del servidor
        socket.on('enviarMensaje', function(mensaje){
            console.log(mensaje);
        })