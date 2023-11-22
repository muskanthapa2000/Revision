// NOTE: DO NOT MODIFY the intial state structure in this file.

import { GET_DATA } from "./actionType";

const initialState = {
  notes: [], 
  view:"View Notes"
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        notes : payload,
      }
  
    default:
      return state;
  }
};

export { reducer };
