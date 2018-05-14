require('./switch')

let qs = require('qs')
let http = require('http')
let fs = require('fs')
let temURL = 'http://104.225.237.158:8080/api/temperature'


// setInterval(function () {
//     fs.readFile('/sys/bus/w1/devices/28-0517602a5bff/w1_slave', {
//         flag: 'r',
//         encoding: 'utf8'
//     }, function (err, data) {
//         temperature = data.split('t=')[1] / 1000
//         let send = qs.stringify({temperature:temperature})
//         let options = {
//             host:'104.225.237.158',
//             port:8080,
//             path:'/api/temperature',
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
//             }
//         }
//         const req = http.request(options, (res) => {
//             console.log(`状态码: ${res.statusCode}`);
//             console.log(`响应头: ${JSON.stringify(res.headers)}`);
//             res.setEncoding('utf8');
//             res.on('data', (chunk) => {
//                 console.log(`响应主体: ${chunk}`);
//             });
//             res.on('end', () => {
//                 console.log('响应中已无数据。');
//             });
//         });
//         req.write(send)
//         req.on('error',function (e) {
//             console.log('problem with request: ' + e.message);
//         })
//         req.end()
//     })
// }, 1000 * 60 *15)
