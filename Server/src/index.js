const express = require('express')
const server = express();
const PORT = 3001;
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());
 server.use('/rickandmorty',router);
 server.use(morgan('dev'))
 server.use(cors());



server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});



// const http = require('http');
// const getCharById = require('./controllers/getCharById')
// // const data = require('./utils/data.js')

// http
//     .createServer((req, res)=>{
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         const {url} = req;
//         if (url.includes( "/rickandmorty/character")) {
//             const id = url.split('/').pop();
//                 return getCharById(res,id)
//         }
//         res.writeHead(400);
//         res.end();
//     }
//     ).listen(3001,"localhost")