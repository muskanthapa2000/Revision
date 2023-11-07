import { GET_PRODUCT, GET_USER_LOGIN, LOGIN, POST_PRODUCT, SIGNUP } from "./actionType";
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

export const loginDataSuccess = (payload)=>(dispatch)=>{
    dispatch({
       type: LOGIN,
       payload : payload
    })
}

export const getUserDataSuccess =  ()=>async (dispatch)=>{
    try {
       await axios.get(`http://localhost:3000/userDetail`)
        .then((res)=>{
                dispatch({
                    type : GET_USER_LOGIN,
                    payload : res.data
                });
                console.log(res.data);
        })
    } catch (error) {
        console.log(error);
    }
}



export const getProductSuccess =()=>async(dispatch)=>{
    try {
        await axios.get(`http://localhost:3000/Product`)
        .then((res)=>{
            dispatch({
                type : GET_PRODUCT,
                payload : res.data
            })
            console.log(res.data);
        })
    } catch (error) {
        console.log(error);
    }
}

export const postProductSuccess =(payload)=>async(dispatch)=>{
     try{
            await axios.post(`http://localhost:3000/Product` , payload )
            .then((res)=>{
                dispatch({
                    type : POST_PRODUCT,
                    payload : res.data
                })
                
                console.log(res.data);
            })
     }
     catch(error){
        console.log(error)
     }
}