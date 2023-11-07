import { GET_USER_LOGIN, LOGIN, SIGNUP } from "../actionType";


const initialState = {
    signupData : [],
    userData : []
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
        userData : action.payload
    }

    case GET_USER_LOGIN:
        return {
            ...state,
            signupData : action.payload
        }
  
    default:
        return state;
  }
}

export default userReducer;