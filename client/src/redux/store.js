import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers';


const logger = (store) => (next) => (action) => {
        console.log('dispatching:', action);
    return next(action);
}

const Store = createStore(
    reducer,
    applyMiddleware(thunk,logger)
);
export default Store;
