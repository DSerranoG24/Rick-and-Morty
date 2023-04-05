import { createStore, applyMiddleware, compose} from 'redux';
import root_Reducer from '../reducer/reducer';
import thunkMiddlewaare from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    root_Reducer,
    composeEnhancer(applyMiddleware(thunkMiddlewaare))
    );

export default store;