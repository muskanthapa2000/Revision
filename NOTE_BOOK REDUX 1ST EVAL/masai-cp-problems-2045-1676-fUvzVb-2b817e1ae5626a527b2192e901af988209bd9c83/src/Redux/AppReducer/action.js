//Write the ActionCreator functions here

import axios from "axios"
import { GET_DATA } from "./actionType"

export const GET_DATA_SUCCESS = ()=>async(dispatch)=>{
    try {
        axios.get(`http://localhost:8080/notes`).then((res)=>{
            dispatch({
                type :GET_DATA,
                payload : res.data
            })
            console.log(res.data);
        })
    } catch (error) {
        console.log(error)
    }

}
