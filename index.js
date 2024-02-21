const http = require('http');
const abouts = require('./about');
const user = require('./users');

const server = http.createServer( (req, res) =>{
    if (req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the home page');
        res.end();
    }else if (req.url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write(abouts);
        res.end();
    }else if (req.url === '/users'){
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.write(user);
        res.end();
    };
}).listen(3000)