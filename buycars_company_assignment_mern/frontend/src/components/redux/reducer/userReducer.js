import { LOGIN, SIGNUP } from "../actionType";


const initialState = {
    signupData : [],
    loginData : []
}

const userReducer =(state = initialState , action)=>{
  switch (action.type) {
    case SIGNUP:
        return {
            ...state, 
            signupData : action.payload
        }

    case LOGIN : 
    return {
        ...state,
        loginData : action.payload
    }
  
    default:
        return state;
  }
}

export default userReducer;