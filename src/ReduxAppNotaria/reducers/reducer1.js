import { ADD_TO_LIST, INPUT_VAL, VIDER } from "./actions/types";

const reducer1 =(state = { price : 0 , ListSumulation : [] } , action)=>{
    switch (action.type) {
        case INPUT_VAL:
            return {
                ...state , price : state.price = action.payload 
            }
        case ADD_TO_LIST:
            return {
                ...state , ListSumulation : [...state.ListSumulation , action.payload]
            }
        case VIDER:
            return {
                ...state , ListSumulation : state.ListSumulation = []
            }
        default:
            return state;
    }
    
}

export default reducer1;