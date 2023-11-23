// NOTE: DO NOT MODIFY the intial state structure in this file.

import { ADD_DATA, DELETE_DATA, EDIT_DATA, GET_DATA } from "./actionType";

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

      case DELETE_DATA : 
      return {
        ...state,
        notes : state.notes.filter(item=>item.id!== payload.id),
      }

      case ADD_DATA : 
      return {
        ...state,
        notes : [...state.notes , payload]
      }

      case EDIT_DATA:
        return {
          ...state,
          notes: state.notes.map((item) =>
            item.id === payload.id ? { ...item, ...payload } : item
          ),
        };
  
    default:
      return state;
  }
};

export { reducer };
