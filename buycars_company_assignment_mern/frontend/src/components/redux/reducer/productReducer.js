import { GET_PRODUCT, POST_PRODUCT } from "../actionType";

const initialState ={
    productData : []
}

const productReducer =(state = initialState , action)=>{
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state, 
                productData : action.payload
            }

        case POST_PRODUCT : 
        return {
            ...state,
            productData: [...state.productData, action.payload]
          };

    
        default:
            return state;
    }
}

export default productReducer;