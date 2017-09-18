import {ActionType} from '../res/R'

const initState = {
    loginedUser:null,
}


export default function (state = initState,action) {
    switch (action.type){
        case ActionType.USER_REGIST:
            return {
                ...state,
                loginedUser:action.data
            }
        default :
            return {
                ...state
            }
    }
}