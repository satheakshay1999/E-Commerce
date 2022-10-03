// In actions we tell them what we want to do operations 

// to add the Item 
export const addItem =(product)=>{
    return {
        type :"ADDITEM",
        payload : product
    }
}

// to DeleteItem
export const deleteItem =(product)=>{
    return  {
        type : "DELETEITEM",
        payload : product
    }
}