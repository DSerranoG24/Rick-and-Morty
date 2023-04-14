const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');
const { response } = require('express');

const getCharById = (req, res)=>{
    const {id }= req.params;

    axios(`${URL}${id}`)
    .then(response=>{
        if (response.data) {
          const {name,gender,species,origin,image,status} = response.data;
          res.status(200).json({id,name,gender,species,origin: origin.name,image,status});  
        }else{
            res.status(404).json({error:'404'})
        }
        
    })
    .catch((error)=>{
        res.status(500).json({error : error.message})
    })
}

module.exports=getCharById;



// const axios = require('axios')



// const getCharById = (res,id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=>{
//         const {name,gender,species,origin,image,status} = response.data;
//         res.writeHead(200,{"Content-Type":"aplication/json"});
//         res.end(JSON.stringify({id, name, gender, species, origin:origin.name, image, status,}));
//     }) 
//     .catch((error)=>{
//         res.writeHead(500,{"Cotent-Type":"text/plain"});
//         res.end(error.message);
//     });  
// };

// module.exports=getCharById;