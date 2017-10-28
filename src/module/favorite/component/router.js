//网站初次加载的页面，包括路由配置等
//react router的配置

import React from 'react'
import {render} from 'react-dom'
import Login from '../../user/component/Login'
import Feedback from './Feedback'
import Favorite from './Favorite'
import Main from './Main'
import Collect from '../../collect/component/Collect'
import Find from '../../collect/component/Find'
import User from '../../user/component/User'
import Regist from '../../user/component/Regist'
import  CollectPage from '../../user/component/CollectPage'
import Loading from '../../utils/component/Loading'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import utilAction from '../../utils/action/Action'



// import {routes} from '__public/Router.js'
import {BrowserRouter as Router ,Route,Link,Switch} from 'react-router-dom'


class RouterConfig extends React.Component{

    componentWillMount(){
       
    }

    render () {
        return (
            <Router>
               
                <div>
                        <Loading onVisiable = {this.props.util.loading} {...this.props}/>
                        <Route exact path="/" component={Favorite}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/regist" component={Regist}/>
                        <Route path="/feedback" component={Feedback}/>
                        <Route path="/favorite" component={Main}/>
                        <Route path="/collectPage" component={CollectPage}/>  
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        util:state.util
    }
}

function mapDispatchToProps(dispatch){
    return {
        utilAction:bindActionCreators(utilAction,dispatch),
        dispatch:dispatch
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RouterConfig);