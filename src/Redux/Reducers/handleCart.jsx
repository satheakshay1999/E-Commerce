const cart = [];


const handleCart=(state = cart , action)=>{
    const product = action.payload ;
        switch(action.type){
            case "ADD_TO_CART" :
                // to check weather product is alredy exist or not 
                const exist = state.find((x) => x.id === product.id);
                // to increse qunatity of cart 
                if(exist){
                    return state.map((ele)=>ele.id === product.id ? {...ele , qty : ele.qty+1 } : ele)
                }else{
                    const product = action.payload;
                    return [
                        ...state ,
                        {
                            ...product ,
                            qty :1
                        }
                    ]
                }
            break;

            case "DELETE_FROM_CART" : 
                const exist1 = state.find((ele)=>ele.id === product.id  )
                if(exist1.qty === 1 ){
                    return state.filter((ele)=>ele.id !== exist1.id);
                }else{
                    return state.map((ele)=> ele.id === product.id ? {...ele ,qty : ele.qty-1} : ele)
                }
            break;

            default :
                return state;

        }
}

export default handleCart