import constants from '../lib/constants';
import Menudata from "../lib/menuData";
import Admindata from "../lib/adminData";
import { combineReducers } from 'redux';

/* let initialState = Menudata; */
const menuItemReducer = (state = Menudata, action) => {
    switch (action.type) {
        
        default:
            return {...state};
    }
};
let adminItemReducer = (state = Admindata, action) => {
    switch (action.type){
        case constants.SET_ADMIN_BODY:
            let newState = {...state};
            let option = newState[action.name];
            if(option.setted == true){
                option.setted = true;
                for (let item in newState){
                    if(newState[item].name !== action.name){
                        newState[item].setted = false;
                    }
                }
            }else{
                option.setted = true;
                for (let item in newState){
                    if(newState[item].name !== action.name){
                        newState[item].setted = false;
                    }
                }
            }  
            return {...newState, ...newState[option]};
        default:
            return {...state};
    }
}


const menuReducer = combineReducers({   
                                        menu:menuItemReducer,
                                        admin:adminItemReducer
                                    });

export default menuReducer;
