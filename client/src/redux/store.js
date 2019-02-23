import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import menuReducer from './menuReducer';
import {setData} from '../lib/axios'; 
import constants from '../lib/constants';


const logger = (store) => (next) => (action) => {
        console.log('dispatching:', action);
    return next(action);
}

const setDataMiddleware = (store) => (next) => (action) => {
    /* if(action.type === constants.INITIALIZE_BODY_DATA) {
        setData(store.dispatch)
    } */
    return next(action);
}

const Store = createStore(
    menuReducer,
    applyMiddleware(thunk,logger,setDataMiddleware)
);
export default Store;
