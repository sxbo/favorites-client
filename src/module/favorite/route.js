//网站初次加载的页面，包括路由配置等
import React from 'react'
import {render} from 'react-dom'
import Login from './Login'
import Feedback from './Feedback'
import Favorite from './Favorite'
import Main from '../main/Main'
import Collect from '../main/Collect'
import Find from '../main/Find'
import User from '../user/User'
import Regist from '../favorite/Regist'


// import {routes} from '__public/Router.js'
import {BrowserRouter as Router ,Route,Link,Switch } from 'react-router-dom'


class RouterConfig extends React.Component{
    render () {
        return (
            <Router >
                <div>
                        <Route exact path="/" component={Favorite}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/regist" component={Regist}/>
                        <Route path="/feedback" component={Feedback}/>
                        <Route path="/main" component={Main}/>
                        <Route path="/main/collect/" component={Collect} />
                        <Route path="/main/find/" component={Find} />
                        <Route path="/main/user/" component={User} />    
                </div>
            </Router>
        )
    }
}

export default RouterConfig;