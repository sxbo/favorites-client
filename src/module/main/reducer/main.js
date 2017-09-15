import {ActionType} from '../res/R'


const initState = {
    collectObject:null,
}


export default function(state = initState,action){
    switch(action.type){
        case ActionType.LOAD_COLLECT_OBJECT:
            return{
                ...state,
                collectObject:action.data
            }
        
        default:
            return state;
    }
}