const axios = require('axios')



const getCharById = (res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
        const {name,gender,species,origin,image,status} = response.data;
        res.writeHead(200,{"Content-Type":"aplication/json"});
        res.end(JSON.stringify({id, name, gender, species, origin:origin.name, image, status,}));
    }) 
    .catch((error)=>{
        res.writeHead(500,{"Cotent-Type":"text/plain"});
        res.end(error.message);
    });  
};

module.exports=getCharById;