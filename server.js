const http = require('node:http');
const data = require('./data.js');
const infoHTML = data.getInfo();

const server = http.createServer((req, res) => {
    console.log('request recived');
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${infoHTML.title}</title>
    </head>
    <body>
      <h1>${infoHTML.title}</h1>
      <h2>${infoHTML.subtitle}</h2>
      <p>${infoHTML.description}</p>  
    </body>
    </html>
    `
    )
});

server.listen(0,() =>{
    console.log(`server listening on port http://localhost:${server.address().port}`)
});