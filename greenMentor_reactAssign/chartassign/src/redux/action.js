import { GET_DATA } from "./actiontype";
import axios from 'axios';

export const getSuccess = (payload)=>{
    return {
        type : GET_DATA,
        payload : payload
    }
}

export const gettingDataSuccess =()=>(dispatch)=>{
    try {
        axios.get(`http://localhost:3000/data`).then((res)=>{
            dispatch(getSuccess(res.data));
            console.log(res.data);
        })
    } catch (error) {
        console.log(error);
    }
}