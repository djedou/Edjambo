import constants from '../lib/constants';
import Menudata from "../lib/menuData";
import Admindata from "../lib/adminData";
import { combineReducers } from 'redux';

/* let initialState = Menudata; */
const menuItemReducer = (state = Menudata, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
};
let adminItemReducer = (state = Admindata, action) => {
    switch (action.type){
        
        default:
            return state;
    }
}


const menuReducer = combineReducers({   
                                        menu:menuItemReducer,
                                        admin:adminItemReducer
                                    });

export default menuReducer;
