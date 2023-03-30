import { ADD_FAV,CLEAN_DETAIL,FILTER,GET_CHARACTER_DEAIL,ORDER,REMOVE_FAV, RESET } from "../actions/actions";


const inicialState = {
    myFavorite:[],
    characterDetail:{},
    allCharacters:[],
};

const root_Reducer = (state = inicialState, {type,payload})=>{
    switch (type) {
        case ADD_FAV:
            return {...state, 
                allCharacters:[...state.allCharacters, payload],
                myFavorite:[...state.allCharacters, payload]
            };
        case REMOVE_FAV:
            return {...state, 
                allCharacters:state.allCharacters.filter(
                pf=>pf.id != payload),
                myFavorite:state.allCharacters.filter(
                    pf=>pf.id != payload
            ),};
        case GET_CHARACTER_DEAIL:
            return{... state, characterDetail:{payload}}
        case CLEAN_DETAIL:
            return{... state, characterDetail:{}}
        case FILTER:
            return {...state, myFavorite:state.allCharacters.filter(
                pf=>pf.gender === payload
            ),};
        case ORDER:
            return{...state, myFavorite:state.allCharacters.sort((a, b)=>{
                    if(a.id>b.id){return payload === "A" ? 1:-1}
                    if(a.id<b.id){return payload === "D" ? 1:-1}
                    return 0;
                }
            )}
        case RESET:
            return {... state, myFavorite:[...state.allCharacters]}
        default:
            return {...state};
    }
}

export default root_Reducer