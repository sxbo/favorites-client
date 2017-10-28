import React from 'react'
import {render} from 'react-dom'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import userAction from '../../user/action/Action'
import collectAction from '../../collect/action/Action'

import styled from 'styled-components'
import CollectList from '../../collect/component/CollectList'

const icon = require('../../../res/img/profile-bg.jpg');

//${props=>`url(${props.bgIcon}) no-repeat center center`};
const Root = styled.div`
    padding:0 10px;
    height:100%;
    //background:${props=>`url(${props.bgIcon}) no-repeat center center`};
`


class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            a:0
        }
    }

    componentWillMount(){
        let {user} = this.props;
        let {collectAction} = this.props
    
        if(user.loginedUser!= null){
            // collectAction.getMyFavorites?
            // collectAction.getMyFavorites(user.loginedUser.id)
            // :''

        }
    }

    render(){
        return(
            <Root bgIcon={icon}>
                <CollectList data="aaa" ></CollectList>
            </Root>
        )
    }
}

function mapStateToProps(state){
    return {
        user:state.user,
        collect:state.collect
    }
}

function mapDispatchToProps(dispatch){
    return {
        userAction:bindActionCreators(userAction,dispatch),
        collectAction:bindActionCreators(collectAction,dispatch),
        dispatch:dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);