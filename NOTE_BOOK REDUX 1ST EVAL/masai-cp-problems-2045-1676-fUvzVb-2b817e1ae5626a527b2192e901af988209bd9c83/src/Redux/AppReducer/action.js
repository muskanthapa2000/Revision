//Write the ActionCreator functions here

import axios from "axios"
import { ADD_DATA, DELETE_DATA, EDIT_DATA, GET_DATA } from "./actionType"

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

export const DELETE_DATA_SUCCESS =(id)=>async(dispatch)=>{
    console.log(id);
    try {
        axios.delete(`http://localhost:8080/notes/${id}`).then((res)=>{
            dispatch({
                type : DELETE_DATA,
                payload : {id}
            })
           
        })
    } catch (error) {
        console.log(error)
    }
}

export const ADD_DATA_SUCCESS =(payload)=>async(dispatch)=>{
    try {
        axios.post(`http://localhost:8080/notes`, payload).then((res)=>{
            dispatch ({
                type : ADD_DATA,
                payload : res.data
            })
        })
    } catch (error) {
       console.log(error); 
    }
}


export const EDIT_DATA_SUCCESS =(payload , id)=>async(dispatch)=>{
    console.log(id);
    try {
        axios.put(`http://localhost:8080/notes/${id}` , payload).then((res)=>{
            dispatch({
                type : EDIT_DATA,
                payload : res.data
            })
            console.log(res.data);
        })
    } catch (error) {
        console.log(error);
    }
}