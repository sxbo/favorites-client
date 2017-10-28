import React from 'react'
import {render} from 'react-dom'
import {Input,Checkbox,Select,Button,Icon,message} from 'antd'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import collectAction from '../../collect/action/Action'
import utilAction from '../../utils/action/Action'

import styled from 'styled-components'

const Root = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    background-color:#F4F6F6;
    .content{
        border-radius:5px;
        margin-top:50px;
        margin-left:auto;
        margin-right:auto;
        width:50%;
        background-color:#fff;
        .title{
            background-color:#34495E;
            text-align:center;
        }
        .content-content{
            padding:10px;
            .collect-title{
                height:80px;
                display:flex;
                .logo{
                    background:${props=>`url(${props.logoIcon}) no-repeat center center`} !important;
                    background-size:100% 100% !important;
                    height:80px;
                    background:#F4F6F6;
                    width:80px;
                    min-width:80px;
                }
                .desc{
                    overflow:hidden;
                    margin:0 0 0 10px;
                    flex-grow:1;
                    height:80px;
                    
                }
            }
            .remark{
                .remark-text{
                    margin:10px 0;
                    font-weight:800;
                    font-size:16px;
                }
            }
            .type{
                margin:10px 0;
                display:flex;
                justify-content:space-between;
            }
            .check{
                .check-text{
                    font-weight:800;
                    font-size:16px;
                    text-align:center;
                }
                .list-row{
                    overflow:hidden;
                    .unselected{
                        display:inline-block;
                        height:50px;
                        width:20%;
                        background-color:#EAEDED;
                        line-height:50px;
                        text-align:center;
                        margin:10px 6.6666666%;
                        box-shadow:1px 1px 10px black;
                        overflow:hidden;
                        font-size:16px;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        
                    }
                    .selected{
                        display:inline-block;
                        width:20%;
                        background:#03A9F4;
                        height:50px;
                        line-height:50px;
                        text-align:center;
                        margin:10px 6.6666667%;
                        box-shadow:2px 2px 10px 1px #03A9F4;
                        overflow:hidden;
                        font-size:16px;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        text-decoration:none;
                        color:#fff;
                    }
                
                }
            }
            .btn{
                .btn-submit{
                    width:100%;
                    background:#03A9F4;
                    margin:10px 0;
                }
            }
        }
        
       

    }
`
const  UrlSearch = function() {
    let name,value;
    let str=location.href; //取得整个地址栏
    let map = new Map();
    let num=str.indexOf("?")//取到?下标
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]取到问号后的所有字符串
    str = str.replace("&amp;","&");//去掉空格
    let arr=str.split("&"); //各个参数放到数组里，使用&分割，并存入数组arr
    for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            map.set(name,value);
        }
    }
    return map;
}


const logoImg = '../../../res/img/logo.jpg';
const logoImga = require('../../../res/img/logo.jpg');

class CollectPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            type:'PUBLIC',
            userId:4,
            selectedId:'unread',
            logoIcon:logoImg,
            url:'',
            title:'',
            description:'',
            charset:'',
            
        }
    }

    componentWillMount(){
        let {utilAction} = this.props

        let map = UrlSearch()
        let url = decodeURIComponent(map.get('url'));
        let title = decodeURIComponent(map.get('title'));
        //这里的undifine是一个字符串，不是undifined类型
        let description = decodeURIComponent(map.get('description'))=="undefined"?decodeURIComponent(map.get('title')):decodeURIComponent(map.get('description'));
        let charset = map.get('charset')
        let {collectAction} = this.props
        if(collectAction.getLogoImage){
            utilAction.show_loading()
            collectAction.getLogoImage(url,()=>{
                    utilAction.hide_loading()
                }
            )
        }
        let user = localStorage.getItem("user");
        
        if(user){ 
            let u = JSON.parse(user)
            this.setState({
                userId:u.id
            })

            collectAction.getMyFavorites?
            collectAction.getMyFavorites(u.id,()=>{
                    utilAction.hide_loading();
                }
            )
            :
            ''
        }

        this.setState(
            {
                url:url,
                title:title,
                description:description,
                charset:charset

            }
        ) 
    }

    onFavClick= (e) =>{
        if(document.getElementById(this.state.selectedId))
            document.getElementById(this.state.selectedId).className="unselected"
        document.getElementById(e.target.id).className="selected"
        this.setState({
            selectedId:e.target.id
        })
        e.preventDefault();
        
    }


    mapDataToView= (list)=>{
        return list.map((item,index)=>{
            if (item.name === "未读列表"){
                return <a id="unread" key={index} href="#" onClick={this.onFavClick} className="selected">{item.name}</a>
            }else{
                return <a id={item.id} key={index} href="#" onClick={this.onFavClick} className="unselected">{item.name}</a>
            }
            })
    }

    onCheckBoxChange= e =>{
        if(e.target.checked){
            this.setState(
                {
                    type:'PRIVATE'
                }
            )
        }else{
            this.setState({
                type:'PUBLIC'
            })
        }
    }
    
    onButtonSubmit = ()=>{
        if(this.state.url=='' || this.state.title == '' ||this.state.userId === ''){
            message.error('操作失败')
            return;
        }
        let {collect} = this.props
        let selectedId = ''
        if(this.state.selectedId === 'unread'){
                selectedId = collect.favorite_List[0].id
        }else{
            selectedId = this.state.selectedId;
        }
        const collect1 ={
            userId:this.state.userId,
            favorId:selectedId,
            url:this.state.url,
            title:this.state.title,
            description:this.state.description,
            logoUrl:collect.collect_logo,
            charset:this.state.charset,
            type:this.state.type,
        }

        let {collectAction} = this.props
        if(collectAction.collect_create){
            utilAction.show_loading();
            collectAction.collect_create(collect1,()=>{
                this.props.history.push('/favorite')
                utilAction.hide_loading()
            })
        }
    }


    componentDidMount(){
        
    }

    render(){
        let {collect} = this.props;
        let favorites = collect.favorite_List
        return (
            <Root logoIcon={collect.collect_logo ===logoImg?logoImga:collect.collect_logo}>
                <div className="content">
                       <div className="title">
                            <a href="/"><img src={require('../../../res/img/logo.png')}/></a>
                       </div>
                       <div className="content-content">
                            <div className="collect-title">
                                    <a href={this.state.url} className="logo" ></a>
                                    <div className="desc">
                                        <h2>
                                            {this.state.title+'+'+this.state.description}
                                        </h2>
                                    </div>
                            </div>
                            <div className="remark">
                                <div className="remark-text">收藏备注</div>
                                <Input placeholder="请输入收藏备注，也可以在这里@好友" type="textarea" autosize={{ minRows: 4, maxRows: 6 }}/>
                            </div>
                            <div className="type">
                                <Checkbox onChange={this.onCheckBoxChange}>私密收藏</Checkbox>
                                <Select defaultValue="@Lucy">
                                    <Select.Option key="1">@lucy</Select.Option>
                                    <Select.Option key="2">@Jack</Select.Option>
                                </Select>
                            </div>
                            <div className="check">
                                <div className="check-text">选择一个收藏夹</div>
                                <div className="list-row">
                                    {
                                        this.mapDataToView(favorites)
                                    }
                                    <a id="create" href="#" className="unselected">
                                        <Icon style={{lineHeight:'50px'}} type="plus"/>
                                    </a>
                                </div>
                            </div>
                            <div className="btn">
                                <Button onClick={this.onButtonSubmit} className="btn-submit">提交</Button>
                            </div>
                        </div>    

                </div>
            </Root>
        )        
    }
}

function mapStateToProps(state){
    return {
        collect:state.collect,
        util:state.util
    }
}

function mapDispatchToProps(dispatch){
    return {
        collectAction:bindActionCreators(collectAction,dispatch),
        utilAction:bindActionCreators(utilAction,dispatch),
        dispatch:dispatch

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CollectPage);