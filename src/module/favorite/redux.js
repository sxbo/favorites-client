//react redux的配置
import React from 'react'
import {render} from 'react-dom'
import {message} from 'antd'
import  axios from 'axios'
//////////////////////////////1.导入redux所需要的module/////////////////////////////////////////
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,combineReducers} from 'redux'
//import {history} from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
///////////////////////////////导入路由/////////////////////////////////////////////////////////////
import RouterConfig from './router.js'

///////////////////////////////导入各模块的ruducer///////////////////////////////////////////////////////////////
import main from '../main/reducer/main.js'
import favorite from './reducer/favorite'
import user from '../user/reducer/user'

//存放reducer的state池
const reducer = combineReducers(
    {
        main,
        favorite,
        user,
    }
)
axios.defaults.baseURL = '/api';
axios.interceptors.response.use(
    function (res) {
        //location.assign("/login")
        // history.pushState("","","/login")
        // history.replaceState("","","/login")
        return res
    },
    function (err) {
        //console.log(err.response)
        if(err.response.status === 401){
            location.assign("/login")
        }
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