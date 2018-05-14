// let io = require('socket.io-client')('http://104.225.237.158:8081')
// let gpio = require('onoff').Gpio
// let led = new gpio(17, 'out')

// io.on('connect',function () {
//     console.log('on connet')
//     io.emit('test')
// })

// io.on('amber',function () {
//     console.log('amber')
// })

// io.on('light',function () {
//     led.writeSync(led.readSync() ^ 1)
// })

setInterval(()=>{
    led.writeSync(led.readSync() ^ 1)
},1000)