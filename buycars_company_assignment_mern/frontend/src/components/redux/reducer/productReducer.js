import { EDIT_PRODUCT, EDIT_PRODUCT_DETAIL, GET_PRODUCT, POST_PRODUCT, PRICE_FILTER } from "../actionType";

const initialState ={
    productData : [],
    editDetail : {}
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

          case EDIT_PRODUCT : 
          return {
            ...state,
            productData : action.payload
          }

          case EDIT_PRODUCT_DETAIL : 
          return {
            ...state , 
            editDetail : action.payload
          }
    
        default:
            return state;
    }
}

export default productReducer;