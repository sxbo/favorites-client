//登录跳转后的主页
import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {Layout,Menu,Icon,Input,Button,Badge} from 'antd'
import {Link,Route} from 'react-router-dom'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import userAction from '../../user/action/Action'
import collectAction from '../../collect/action/Action'
import utilAction from '../../utils/action/Action'

import Home from './Home'
import UnreadList from '../../collect/component/UnreadList'
import CollectTool from '../../collect/component/CollectTool'
import Find from '../../collect/component/Find'
import User from '../../user/component/User'
import Collect from '../../collect/component/Collect'
import ExportCollect from '../../collect/component/ExportCollect'
import ImportCollect from '../../collect/component/ImportCollect'
import FavoriteContent from '../../collect/component/FavoriteContent'

const {Sider,Header,Content,Footer} = Layout

const Root = styled.div`
    .page-layout{
        width:100%;
        height:100%;
        .page-sider{
            background-color:#cccccc;
            font-size:100px;
            color:#444;
            .ant-menu,.ant-layout-sider-trigger{
                background:Transparent;
                font-size:20px;
                color:#444;
            }
            .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
                background-color:#AEB6BF;
            }
            .logo{
                height:168px;
                margin:16px;
                border-radius:6px;
                text-align:center;
                transition:all .5s;
                .image{
                    border-radius:50%;
                    width:100%;
                    height:100%;
                    max-height:110px;
                    max-width:110px;
                    margin-top:50%;
                    transform:translateY(-50%);
                }
            }
            .nav-icon{
                font-size:16px;
            }
            .nav-text{
                font-size:16px;
            }

            .nav-count{
                margin-left:20px;
            }
            &.ant-layout-sider-collapsed{
                .logo{
                    margin-bottom:80px;
                    height:32px;
                }
                .badge{
                    display:none;
                }
                .nav-text{
                    display:none;
                }
            }
            .ant-menu-inline .ant-menu-item:after, .ant-menu-vertical .ant-menu-item:after{
                display:none;
            }

        }
        .page-header{
            display:flex;
            align-items:center;
            justify-content:space-between;
            background-color:#EBEDEF;
            .serach-box{
                .ant-input{
                    transition:all .5s;
                    border-radius:30px;
                    &:focus{
                        width:300px;
                    }
                }
            }
            .operat-box{
                Button{
                    margin:0 10px;
                }
            }
        }
        .page-content{
            background-color:#fff;
            padding:10px;
            //margin-top:10px;
            display:flex;
            flex-direction:column;
        }
        .page-footer{
            background-color:#EBEDEF;
            text-align:center;
        }
    }

    .badge{
        font-size:16px;
        margin-left:20%;
        background-color:#AEB6BF;
        display:inline-block;
        height:20px;
        width:20px;
        line-height:20px;
        text-align:center;
        border-radius:50%;
    }

`

class Main extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            defaultSelectedKeys : ["1"]
        }
        
    }

    componentWillMount(e){
        let {utilAction} = this.props;
        utilAction.show_loading?
        utilAction.show_loading()
        :''
            
            
        let user = localStorage.getItem("user");
        if(user){
            let user1 = JSON.parse(user);
            let {collectAction} = this.props
            collectAction.getMyFavorites?
            collectAction.getMyFavorites(user1.id)
            :
            ''
        }else{
            this.props.history.push('/login')
        }

        
    }

    componentDidMount(){
        let {utilAction} = this.props;
        if(utilAction.hide_loading){
            var t = setTimeout(
                ()=>{utilAction.hide_loading()},
                500
            )
        }
       
    }

    componentWillUnmount(){
        // this.timer && clearTimeout(this.timer)
    }
    onPressEnter = () =>{

        
    }

    onFavoriteClick = (e)=>{
        
    }

    onMenuSelect = (item) =>{
        
        
    }

    render(){
        
        let favorite_List = this.props.collect.favorite_List
        return(
            <Root>
                <Layout className="page-layout">
                    <Sider className="page-sider" collapsible={true}>
                        <div className="logo">
                            <img className="image" src={require('../../../res/img/timg.jpg')}/>
                        </div>
                        <Menu onSelect={this.onMenuSelect} mode="inline" defaultSelectedKeys={this.state.defaultSelectedKeys}>
                            <Menu.Item key="1">
                                <Link to="/favorite/home" >
                                    <Icon className="nav-icon" type="home"/>
                                    <span className="nav-text">首页</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/favorite/unread">
                                    
                                    <Icon className="nav-icon" type="file-text"/>
                                    <span className="nav-text">未读列表</span>
                                    {
                                        favorite_List[0] &&favorite_List[0].name ==="未读列表"?
                                        <span className="badge">{favorite_List[0].count}</span>:
                                        ''
                                    }
                                    
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/favorite/find">
                                    <Icon className="nav-icon" type="compass"/>
                                    <span className="nav-text">发现</span>
                                </Link>
                            </Menu.Item>
                            <Menu.SubMenu  key="sub2" title={<span><Icon className="nav-icon" type="appstore"></Icon><span className="nav-text">收藏夹</span></span>}>
                                <Menu.Item key="s21">
                                    <Link to="/favorite/collect">
                                        <Icon className="nav-icon" type="folder-add"/>
                                        <span >新建收藏夹</span>
                                    </Link>
                                </Menu.Item>
                                {
                                    favorite_List?
                                    favorite_List.map((item,index)=>{
                                        if(item.name!=='未读列表'){
                                            return <Menu.Item key={item.name} favoriteId={item.id}>
                                                        <Link key={item.id} onClick={this.onFavoriteClick} to="/favorite/list">
                                                            <Icon className="nav-icon" type="folder"/>
                                                            <span>{item.name}</span>
                                                            <span className="nav-count">({item.count})</span>
                                                        </Link>
                                                    </Menu.Item>
                                        }
                                    })
                                    :
                                    ""
                                }
                            </Menu.SubMenu>
                            <Menu.Item key="s31">
                                <Link to="/favorite/collecttool">                                
                                    <Icon className="nav-icon" type="tool"/>
                                    <span className="nav-text">网页收集工具</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="s32">
                                <Link to="/favorite/import">
                                    <Icon className="nav-icon" type="file-add"/>
                                    <span className="nav-text">导入收藏夹</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="s33">
                                <Link to="/favorite/export">
                                    <Icon className="nav-icon" type="export"/>
                                    <span className="nav-text">导出收藏夹</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="s34">
                                <Link to='/favorite/user/'>
                                    <Icon className="nav-icon" type="user"/>
                                    <span className="nav-text">用户中心</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="page-header">
                            <div className="serach-box">
                                <Input placeholder="搜索" onPressEnter={this.onPressEnter}/>
                            </div>
                            <div className="operat-box">
                                <Button icon="notification" type="circle"/>
                                <Button icon="delete"/>
                                <Button icon="clock-circle-o" type="circle"/> 
                                <Button icon="logout" type="circle"/>
                                <Button icon="setting" />  
                            </div>
                        </Header>
                        <Content className="page-content">
                            <Route path="/favorite/home" component={Home}/>
                            <Route path="/favorite/unread" component={UnreadList} />
                            <Route path="/favorite/collect" component={Collect} />
                            <Route path="/favorite/list" component={FavoriteContent} />
                            <Route path="/favorite/find" component={Find} />
                            <Route path="/favorite/collecttool" component={CollectTool} />
                            <Route path="/favorite/import" component={ImportCollect} />
                            <Route path="/favorite/export" component={ExportCollect} />                            
                            <Route path="/favorite/user" component={User} />  
                        </Content>
                        <Footer className="page-footer">
                            Favorites Client ©2017 Created By XiaoboGG
                        </Footer>
                    </Layout>
                </Layout>

            </Root>
        )
    }
}


function mapStateToProps(state){
    return {
        user:state.user,
        collect:state.collect,
        util:state.util
    }
}

/**
 * 试用此种写法感觉非常nice,在全局props中userAction，collectAction两个变量里边是两个模块的所有方法,以后就使用上边和下边这两种模式
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch){
    return {
        userAction:bindActionCreators(userAction,dispatch),
        collectAction:bindActionCreators(collectAction,dispatch),
        utilAction:bindActionCreators(utilAction,dispatch),
        dispatch:dispatch  
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);



