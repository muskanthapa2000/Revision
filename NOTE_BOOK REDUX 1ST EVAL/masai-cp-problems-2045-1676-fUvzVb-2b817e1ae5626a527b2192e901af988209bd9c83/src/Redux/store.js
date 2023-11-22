// NOTE: use this store variable to create a store.
// remove the assigned object and create the store and assign to the store.

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer } from "./AppReducer/reducer";

const rootReducer = combineReducers({
  notes : reducer
})

const store = createStore(rootReducer , applyMiddleware(thunk));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
