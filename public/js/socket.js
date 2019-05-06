document.addEventListener('DOMContentLoaded', function () {
    var socket = io();
    socket.emit('test','hello World');
    socket.on('test', function(msg){
        console.log(msg);
    });
});

