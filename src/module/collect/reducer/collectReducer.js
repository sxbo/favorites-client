import {ActionType} from './R'
const initState={
    collect:null,
    favorite:null,
    favorite_List:[],
    collect_logo:''
}

export default function (state = initState,action){
    switch (action.type){
        case ActionType.COLLECT_CREATE:
            return {
                ...state,
                collect:action.data
            }
        case ActionType.FAVOTITE_CREATE:
            return {
                ...state,
                favorite:action.data
            }
        case ActionType.COLLECT_GET_FAVORITES:
            return {
                ...state,
                favorite_List:action.data
            }
        case ActionType.COLLECT_lOAD:
            return{
                ...state,
                collect:action.data
            }
        case ActionType.COLLECT_LOAD_LOGO:
            return {
                ...state,
                collect_logo:action.data
            }
        
        default :
            return {
                ...state
            }
    }
}