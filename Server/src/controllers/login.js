const usuario = require('../utils/users.js')

const login =(req, res)=>{
    const {email, password}=req.query;
    if (!password || !email) {
        return res.status(500).json({message: 'Faldan datos'})
    }
    const personas = usuario.filter((persona)=>{
        return (persona.email === email && persona.password === password)
    })
    if (personas.length) {
        res.status(200).json({access: true})
    }else{
        res.status(200).json({access: false})
    }
}
module.exports = login;