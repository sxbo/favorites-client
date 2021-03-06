//react redux的配置
import React from 'react'
import {render} from 'react-dom'
import {message} from 'antd'
import  axios from 'axios'
//////////////////////////////1.导入redux所需要的module/////////////////////////////////////////
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,combineReducers} from 'redux'
//import {history} from 'react-router-dom'
//中间件，解决异步操作，得到后台数据后再执行reducer中代码
import thunkMiddleware from 'redux-thunk'
///////////////////////////////导入路由/////////////////////////////////////////////////////////////
import RouterConfig from './router.js'

///////////////////////////////导入各模块的ruducer///////////////////////////////////////////////////////////////

import favorite from '../reducer/favorite'
import user from '../../user/reducer/user'
import collect from '../../collect/reducer/collectReducer'
import util from '../../utils/reducer/reducer'

//存放reducer的state池
//combineReducers对于复杂应用（含多模块时），对reducer进行拆分，各自负责独立模块的state
const reducer = combineReducers(
    {
        favorite,
        user,
        collect,
        util
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
            location.href = ("/login")
        }
    }
)
//存放state池的store
//applyMiddleware（...middlewares）将所有中间件作为参数，存放在一个数组中，按顺序依次执行，这里中间件的前后顺序很有讲究！
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
