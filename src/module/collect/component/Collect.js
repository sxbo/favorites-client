/**
 * 收藏文章的页面
 */
import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {Button,Input,Icon,message} from 'antd'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import collectAction from '../action/Action'
import utilAction from '../../utils/action/Action'

import {Link} from 'react-router-dom'

const CollectRoot = styled.div`
    height:100%;
    background:#F8F9F9;
    .title{
        margin:20px;
        height:60px;
        text-align:center;
        line-height:60px;
        font-size:20px;
        color:#20aaf6;
        background-color:#eff5f7;
    }
    .form-box{
        margin:20px;
        .collect-input{
            display:flex;
            align-items:center;
            width:200px;
            height:20px;
            margin:20px 0;
        }
        .collect-btn{
            font-size:15px;
            width:200px;
        }
    }

`

class Collect extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value:''
        }
        
    }

    collectCreate=()=>{
        let {utilAction} = this.props
        let {collectAction} = this.props;
        let user = localStorage.getItem('user');
        let u = JSON.parse(user);
        const newFavorite = this.state.value.trim()
        if(newFavorite === ''){
            message.warn('请输入收藏夹名字！')
            return;
        }
        if(collectAction.favorite_create){
            utilAction.show_loading()
            collectAction.favorite_create(newFavorite,
                ()=>{
                    if(u){
                        collectAction.getMyFavorites(u.id);
                    }
                    utilAction.hide_loading();
                }
            )
        }
    }

    onValueChange=(e)=>{
        this.setState({value:e.target.value})
    }

    render(){
        return(
            <CollectRoot>
                <div className="title">新建收藏夹</div>
                <div className="form-box">
                    <div >
                        <Input onChange={this.onValueChange}  className="collect-input" placeholder="Enter your userName" prefix={<Icon type="folder" />}></Input>
                    </div>
                    <div>
                        <Button onClick={this.collectCreate} icon='cloud' className="collect-btn">ok</Button>
                    </div>
                </div>
            </CollectRoot>
        ) 
    }
}


function mapStateToProps(state){
    return {
        collect:state.collect,
        util:state.util
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectAction:bindActionCreators(collectAction,dispatch),
        utilAction:bindActionCreators(utilAction,dispatch),
        dispatch:dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Collect)