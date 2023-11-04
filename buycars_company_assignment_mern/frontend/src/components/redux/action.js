import { SIGNUP } from "./actionType";
import axios from 'axios';


export const signupSuccess =(payload)=>{
    return{
        type : SIGNUP,
        payload : payload
    }
}

export const SignupDataSuccess =  (newUser)=>async (dispatch)=>{
    try {
       await axios.post(`http://localhost:3000/userDetail` , newUser)
        .then((res)=>{
                dispatch(signupSuccess(res.data));
                console.log(res.data);
        })
    } catch (error) {
        console.log(error);
    }
  

}