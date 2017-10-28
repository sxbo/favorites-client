import {ActionType} from '../reducer/R'

export default {
    show_loading:() =>({
        type:ActionType.LOADING,
        data:"block"  
    }),
    hide_loading:()=>({
        type:ActionType.LOADING,
        data:"none"
    })
}