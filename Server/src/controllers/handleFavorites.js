let myFavorites = [];

const postFav=(req, res)=>{
    const {body}= req;
    myFavorites.push(body);
    res.status(200).json(myFavorites)
}

const deleteFav = (req, res)=>{
    const {id}= req.params;
    let filtrado = myFavorites.filter((character)=>character.id != id)
    myFavorites = filtrado;
     return res.status(200).json(filtrado);

}

module.exports = {
    postFav, deleteFav
}