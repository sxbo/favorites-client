import {ActionType} from './R'

const initState = {
    loading:'none',
}

export default function (state = initState,action) {
    switch(action.type){
        case ActionType.LOADING:
            return {
                ...state,
                loading:action.data
            }
        default:
            return{
                ...state
            }
    }

}