// to add item to cart

import product from "../../Comonents/Product"

export const addtocart=()=>{
    return{
        type : "ADD_TO_CART",
        payload : product
    }
}

// to delete item from cart 

export const deletefromcart=()=>{
    return {
        type : "DELETE_FROM_CART",
        payload : product
    }
}