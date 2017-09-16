import {ActionType} from '../res/R'
//redux整个状态池中的一部分，存放项目中某个模块的state
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