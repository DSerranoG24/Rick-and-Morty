const http = require('http');
const data = require('./utils/data.js')

http
    .createServer((req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        const {url} = req;
        console.log('Esta llegando una peticion', url);
        if (url.includes( "/rickandmorty/character")) {
            const id = url.split('/').pop();
                res.writeHead(200,{"Content-Type":"aplication/json"});
                return res.end(JSON.stringify(data[id-1]));
        }
        res.writeHead(400);
        res.end();
    }
    ).listen(3001,"localhost")