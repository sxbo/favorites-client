//react redux的配置

import React from 'react'
import {render} from 'react-dom'
//////////////////////////////1.导入redux所需要的module/////////////////////////////////////////
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
///////////////////////////////导入路由/////////////////////////////////////////////////////////////
import RouterConfig from './router.js'

///////////////////////////////导入各模块的ruducer///////////////////////////////////////////////////////////////
import main from '../main/reducer/main.js'

//存放reducer的state池
const reducer = combineReducers(
    {
        main,
    }
)

//存放state池的store
const store = createStore(reducer,applyMiddleware(thunkMiddleware))

class Redux extends React.Component{
    render(){
        return(
            //Provider属性store
            <Provider store={store}>
                <RouterConfig/>
            </Provider>
        )
    }
}


export default Redux;