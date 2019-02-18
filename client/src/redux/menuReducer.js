import constants from '../lib/constants';
import Menudata from "../lib/menuData";
import { combineReducers } from 'redux';

let initialState = Menudata;
const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
};

const menuReducer = combineReducers({   
                                        menu:menuItemReducer
                                    });

export default menuReducer;
