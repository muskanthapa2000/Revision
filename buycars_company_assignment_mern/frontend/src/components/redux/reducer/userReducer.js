import { SIGNUP } from "../actionType";


const initialState = {
    signupData : []
}

const userReducer =(state = initialState , action)=>{
  switch (action.type) {
    case SIGNUP:
        return {
            ...state, 
            signupData : action.payload
        }
  
    default:
        return state;
  }
}

export default userReducer;