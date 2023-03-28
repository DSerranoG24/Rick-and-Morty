import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_CHARACTER_DEAIL = "GET_CHARACTER_DEAIL"
export const CLEAN_DETAIL = "CLEAN_DETAIL"

export const addFav =(personaje)=>{
    return {type:ADD_FAV, payload:personaje};
};

export const removeFav =(id)=>{
    return{type:REMOVE_FAV, payload:id};
};

export const getCharacterDetail = (id)=>{
    return function(dispatch){
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_CHARACTER_DEAIL, payload: data}));
    };
};

export const cleanDetail = () =>{
    return {type:CLEAN_DETAIL}
}