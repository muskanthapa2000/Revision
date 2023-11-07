import {legacy_createStore , applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk';
import userReducer from './reducer/userReducer';
import productReducer from './reducer/productReducer';

const combinerReducer = combineReducers({
     User : userReducer,
     product : productReducer
})

const store = legacy_createStore(combinerReducer , applyMiddleware(thunk));

export default store;