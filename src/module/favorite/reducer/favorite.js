import {ActionType} from './R'

const initState = {
    feedback:null
}

export default function (state = initState,action) {
    switch (action.type){
        case ActionType.FAV_FEEDBACK:
            return {
                ...state,
                feedback:action.data
            }
        default:
            return {
                ...state
            }

    }

}