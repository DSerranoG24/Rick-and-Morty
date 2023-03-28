import { ADD_FAV,CLEAN_DETAIL,GET_CHARACTER_DEAIL,REMOVE_FAV } from "../actions/actions";


const inicialState = {
    myFavorite:[],
    characterDetail:{},
};

const root_Reducer = (state = inicialState, {type,payload})=>{
    switch (type) {
        case ADD_FAV:
            return {...state, myFavorite:[...state.myFavorite, payload]};
        case REMOVE_FAV:
            return {...state, myFavorite:state.myFavorite.filter(
                pf=>pf.id != payload
            ),};
        case GET_CHARACTER_DEAIL:
            return{... state, characterDetail:{payload}}
        case CLEAN_DETAIL:
            return{... state, characterDetail:{}}
        default:
            return {...state};
    }
}

export default root_Reducer