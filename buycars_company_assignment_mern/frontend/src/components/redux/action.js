    import { EDIT_PRODUCT, EDIT_PRODUCT_DETAIL, GET_PRODUCT, GET_USER_LOGIN, LOGIN, MILEAGE_FILTER, POST_PRODUCT, PRICE_FILTER, SIGNUP } from "./actionType";
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
                    })
                    
                    console.log(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }



    export const getProductSuccess =(priceFilter , colorFilter , mileageFilter)=>async(dispatch)=>{
        try {
            const filterPriceData = priceFilter ? `&_sort=price&_order=${priceFilter}` : "";
            const colorFilterData = colorFilter ? `=${colorFilter}` : "";
            const mileageFilterData = mileageFilter ?`&_sort=mileage&_order=${mileageFilter}` : ""
            await axios.get(`http://localhost:3000/Product?${filterPriceData}${mileageFilterData}`)
            .then((res)=>{
                dispatch({
                    type : GET_PRODUCT,
                    payload : res.data
                })
                dispatch({
                    type : MILEAGE_FILTER,
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



    export const editProductSuccess = (payload, id) => async (dispatch) => {
        try {
        const res = await axios.put(`http://localhost:3000/Product/${id}`, payload);
        dispatch({
            type: EDIT_PRODUCT,
            payload: res.data,
        })
        console.log(res.data);
        } catch (error) {
        console.log(error);
        }
    };

    export const getEditProductDetail = (id) => async (dispatch) => {
        try {
        const res = await axios.get(`http://localhost:3000/Product/${id}`);
        dispatch({
            type: EDIT_PRODUCT_DETAIL,
            payload: res.data,
        });
        } catch (error) {
            console.log(error);
        }
    };
    