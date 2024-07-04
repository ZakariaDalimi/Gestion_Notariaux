import { ADD_TO_LIST, INPUT_VAL, VIDER } from "./types"

export const inputvalue = (prix_val)=>{
    return {
        type : INPUT_VAL,
        payload : prix_val,
    }
}

export const addtolist = (tolist)=>{
    return {
        type : ADD_TO_LIST,
        payload : tolist
    }
}

export const viderlist = ()=>{
    return {
        type : VIDER
    }
}