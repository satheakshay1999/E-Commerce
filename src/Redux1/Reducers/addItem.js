const addItem =[];

const addItems =(state=addItem , action )=>{
    switch(action.type){
        case "ADDITEM" :
            return [
                ...state ,
                action.payload  
            ]
       
        case "DELETEITEM" :
            return state = state.filter((ele)=>ele.id !== action.payload.id)
     

        default :           
            return state ;
        

    }
}
export default addItems;