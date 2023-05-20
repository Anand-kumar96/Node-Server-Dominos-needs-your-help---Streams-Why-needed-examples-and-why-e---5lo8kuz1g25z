// var http = require("http");

// const httpServer = http.createServer(handleServer);


// function handleServer(req, res) {
//   const pathName=req.url;
//   if(pathName==='/welcome'){
//     res.writeHead(200, { 'content-Type': 'text/plain'})
//     res.end('Welcome to Dominos!')
//   }else if (pathName === '/contact') {
//     res.writeHead(200, { 'content-Type': 'application/json' })
//     res.end(
//       JSON.stringify({
//         phone: '18602100000',
//         email: 'guestcaredominos@jublfood.com',
//       })
//     )
//   }else{
//     res.writeHead(404, { 'content-Type': 'text/plain' })
//     res.end('404 Not found')
//   }
// }
// httpServer.listen(8081);
// console.log('server is running at port 8081')
// module.exports = httpServer;


// or
var http = require("http");
module.exports= http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/welcome') {
      res.writeHead(200, { 'content-Type': 'text/plain' })
      res.end('Welcome to Dominos!')
    } else if (pathName === '/contact') {
      res.writeHead(200, { 'content-Type': 'application/json' })
      res.end(
        JSON.stringify({
          phone: '18602100000',
          email: 'guestcaredominos@jublfood.com',
        })
      )
    } else {
      res.writeHead(404, { 'content-Type': 'text/plain' })
      res.end('404 Not found')
    }
  })
  .listen(8081)
console.log('server is running at port 8081')
