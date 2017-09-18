//登录跳转后的主页
import React from 'react'
import {render} from 'react-dom'

import {Link,Route} from 'react-router-dom'
import Collect from './Collect'
import Find from './Find'
import User from '../../user/component/User'
class Main extends React.Component{
    
    render(){
        return(
            <div>
                <div>已经登录</div>
                <div><Link to="/main/collect">收藏夹</Link></div>
                <div><Link to="/main/find">发现</Link></div>
                <div><Link to="/main/user">用户中心</Link></div>
                
               
            </div>
        ) 
    }
}

export default Main;



