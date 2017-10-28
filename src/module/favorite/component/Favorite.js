//网站初次加载的页面，包括路由配置等
import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {Layout,Anchor,Icon,Row,Col} from 'antd'

import {BrowserRouter as Router ,Route,Link } from 'react-router-dom'

//const favicon = require("__resource/img/favicon.png")

const {Header,Content,Footer} = Layout;
const Root = styled(Layout)`
    height:100%;
    .header{
        display:flex;
        background-color:#2C3E50;
        position:fixed;
        width:100%;
        .logo{
            color:#fff;
            flex-grow:1;
            .logo-text{
                color:#fff;
                font-size:30px;
                text-decoration:none;
            }
        }
        .navigat{
            flex-grow:1;
            display:flex;
            justify-content:flex-end;
            .link{
                color:#fff;
                padding:0 10px;
                .link-text{
                    color:#fff;
                    text-decoration:none
                }
            }
        }
    }
    .content{
        .picture{
            text-align:center;
            color:#fff;
            width:100%;
            background-color:#18BC9C;
            padding:50px 0;
            .favicon{
                margin-top:100px;
                padding:20px 0;
            }
            .colund{
                font-size:40px;
                padding:10px 0;
            }
            .star-box{
                padding:10px 0;
                display:flex;
                justify-content:center;
                align-items:center;
                .star{
                    font-size:50px;
                }
                .star-line{
                    height:0px;
                    min-width:100px;
                    border:solid 4px;
                }
            }
            .anywhere{
                padding:10px 0;
                font-size:25px;   
            }
        }
        .statistics{
            background-color:#fff;
            text-align:center;
            padding:0 0 40px;
            .collector{
                color:#34495E;
                padding:20px 0;
                font-size:40px;
            }
            .row{
                display:flex;
                justify-content:center;
                .row-box{
                    width:200px;
                    min-width:200px;
                    height:200px;
                    background-image:url(../../res/img/favicon.png);
                    background-size:80% 80%;
                    background-repeat:no-repeat;
                    background-position:50% 50%;
                }
            }  
        }
        .aboutus{    
            padding:40px 0;
            background-color:#18BC9C;
            .aboutus-big-text{
                text-align:center;
                font-size:30px;
                color:#fff;
            }
            .aboutus-small-text{
                padding:20px ;
                display:flex;
                font-size:15px;
                justify-content:center;
                color:#fff;
                .item{
                    padding:20px 20px;
                }

            }

        }
        .linkus{
            margin-bottom:70px;
            .linkus-text{
                padding:40px 0;
                font-size:30px;
                color:#34495E;
                text-align:center;
            }
            .linkdetails{
                display:flex;
                .left{
                    flex-grow:1;
                }
                .right{
                    div{
                        padding:20px 0;
                    }
                    flex-grow:1;
                    font-size:20px;
                    .mail{
                        color:#8E44AD;
                        font-size:25px;
                        margin:0 10px;
                    }
                    .envir{
                        color:#03A9F4;
                        font-size:25px;
                        margin:0 10px;
                    }
                    .git{
                        color:#F4511E;
                        font-size:25px;
                        margin:0 10px;
                    }
                    .ie{
                        color:#FFEB3B;
                        font-size:25px;
                        margin:0 10px;
                    }
                    
                }

            }
           
        }
    }

    .footer{
        text-align:center;
        color:#fff;
        background-color:#2C3E50;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height:70px;
    }


`

class Favorite extends React.Component{
    render () {
        return(
        <Root>
            <Header className="header" >
                <div className="logo"><Link className="logo-text" to="/">云收藏</Link></div>
                <div className="navigat">
                    <div className="link"><Link className="link-text" to="/login">登录</Link></div>
                    <div className="link"><Link className="link-text" to="/feedback">反馈</Link></div>
                    <div className="link">
                       <a className="link-text" href="#link-about" >关于</a>
                    </div>
                </div>  
            </Header>
            <Content className="content">
                <div className="picture">
                    <div className="favicon">
                        <img src={require('../../../res/img/favicon.png')}/>
                    </div>
                    <div className="colund">
                        云收藏
                    </div>
                    <div className="star-box">
                            <div className="star-line"></div>
                            <Icon className="star" type="star" ></Icon>
                            <div className="star-line"></div>
                    </div>
                    <div className="anywhere">
                        随时随地 - 方便快捷 - 智慧收藏
                    </div>
                </div>
                <div className="statistics">
                    <div className="collector">收藏家</div>
                    <div className="row">
                        <div className="row-box">
                            我收藏的文章最多!
                        </div>
                        <div className="row-box">
                            最多被关注！
                        </div>
                        <div className="row-box">
                            最多被赞，分享快乐！
                        </div>
                    </div>
                </div>
                <div className="aboutus">
                    <a name="link-about"></a>
                    <div className="aboutus-big-text">关于我们</div>
                    <div className="aboutus-small-text">
                        <span className="item">
                            我们做了一个可以在线随时随地简单收藏的一个网站 <br></br>
                            可以在这个网站上分类整理收藏的网站或者文章，<br></br>
                            也可以查看别人都收藏了些什么。 <br></br>
                            可以从浏览器收藏夹导入到我们的网站，<br></br>
                            也可以从我们的网站导出去做备份。<br></br> 
                            根据共同的收藏可以找出我们相互兴趣的人。<br></br>
                        </span>
                        <span className="item">
                            我们是一群热爱生活，热爱开源，热爱分享的IT人！ <br></br>
                            开放、自由、分享、开源是我们的主题！ <br></br>
                            当您的浏览器收藏夹收藏的网站或者文章大于1000份的时候，<br></br>
                            找东西绝对是个体力活。 <br></br>
                            那就让云收藏帮您解决吧，方便分类、整理、查询、搜索。<br></br>
                    </span>
                    </div>
                </div>
                <div className="linkus">
                    <div className="linkus-text">联系我们</div>
                    <div className="linkdetails">
                        <div className="left"></div>
                        <div className="right">
                            <div>邮件
                                <Icon className="mail" type="mail"></Icon> 
                                <a href="mailto:cloudfavorites@126.com">cloudfavorites@126.com</a> 
                            </div>
                            <div>位置
                                <Icon className="envir" type="environment"></Icon>
                                <a href="#">银河系，地球，中国</a>
                            </div>
                            <div>GitHub
                                <Icon className="git" type="github"></Icon>
                                <a href="https://github.com/cloudfavorites">关注我们</a>
                            </div>
                            <div>关于网站
                                <Icon className="ie" type="ie"></Icon>
                                <a href="#">专注于收藏、分享、开源</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer className="footer">
                <div className="license">Copyright © favorites 2016-2017 Created By xiaobo GG 20170913</div>
            </Footer>
        </Root>
        )
    }
}

export default Favorite;