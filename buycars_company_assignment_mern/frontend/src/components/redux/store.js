import {legacy_createStore , applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk';
import userReducer from './reducer/userReducer';

const combinerReducer = combineReducers({
    userReducer
})

const store = legacy_createStore(combinerReducer , applyMiddleware(thunk));

export default store;