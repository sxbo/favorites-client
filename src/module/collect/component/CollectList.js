/**
 * 任何地方要用到的收藏列表
 */
import React from 'react'
import {render} from 'react-dom'

import styled from 'styled-components'
import {Card,Avatar,Dropdown,Menu,Icon} from 'antd'

const Item = styled(Card)`
    width:100%;
    background:#F2F3F4 !important;
    .collect{
        display:flex;
        flex-direction:column;
        .collect-content{
            display:flex;
            .logo{
                width:100px;
                min-width:100px;
                height:100px;
                background:#AEB6BF; 
            }
            .title{
                padding:0 10px;
                height:40px;
                overflow:hidden;
            }
            .description{
                padding:0 10px;
                h2{
                    max-height:50px;
                    overflow:hidden;                    
                }
                
            }

        }
        .collect-favorite{
            padding:10px 0 0;
            display:flex;
            justify-content: space-between;
            .favorite{
                
            }
            .conminu{
                span{
                    padding:0 5px;
                }
            }
        }
    }

    .head-content{
        display:flex;
        padding:0;
        align-items:center;
        div{
            padding:0 5px;
        }
    }

    .ant-card-head{
        padding: 0 5px !important;
        
    }

    .ant-dropdown-link{
        font-size:20px;
        margin:0 20px;
    }

`
const menu = (
    <Menu className>
        <Menu.Item>
            <a rel="noopener noreferrer" style={{fontSize:'18px',fontWeight:'900'}}><Icon style={{color:'red',fontSize:'18px',padding:'0 10px'}} type="delete"></Icon>删除</a>
            <div style={{padding:'0 10px',}}>删除该收藏</div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <a rel="noopener noreferrer" style={{fontSize:'18px',fontWeight:'900'}} ><Icon style={{color:'#3498DB',fontSize:'18px',padding:'0 10px'}} type="edit"/>修改</a>
            <div style={{padding:'0 10px'}}>修改收藏的属性</div>
        </Menu.Item>
    </Menu>
)


class OperationArea extends React.Component{
        

    render(){
        return(
            <Dropdown overlay={menu} placement="bottomLeft">
                <a className="ant-dropdown-link" >
                &nbsp;
                <Icon style={{fontSize:'15px'}} type="down" />
                </a>
            </Dropdown>
        )
    }

}

class ItemTitle extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="head-content">
                <div><Avatar>U</Avatar></div>
                <div><a>name</a></div>
                <div>一天前</div>
            </div>
        )
    }
}


class CollectList extends React.Component{

    constructor(props){
        super(props)

    }


    render(){
        return (
            <Item title={<ItemTitle/>} extra={<OperationArea/>}>
                <div className="collect">
                    <div className="collect-content">
                        <div className="logo">logo</div>
                        <div>
                            <div className="title">
                                <h1>
                                    <a className="title-text">title扁平化设计或平面用户界面色彩在今天的网页设计中相当流行，使用大胆、明亮的颜色来创造清晰简洁的界面。
                                    title扁平化设计或平面用户界面色彩在今天的网页设计中相当流行，使用大胆、明亮的颜色来创造清晰简洁的界面    
                                     </a>
                                </h1>
                            </div>
                            <div className="description">
                                <h2>
                                    description
                                    title扁平化设计或平面用户界面色彩在今天的网页设计中相当流行，使用大胆、明亮的颜色来创造清晰简洁的界面
                                    title扁平化设计或平面用户界面色彩在今天的网页设计中相当流行，使用大胆、明亮的颜色来创造清晰简洁的界面
                                    title扁平化设计或平面用户界面色彩在今天的网页设计中相当流行，使用大胆、明亮的颜色来创造清晰简洁的界面
                                    title扁平化设计或平面用户界面色彩在今天的网页设计中相当流行，使用大胆、明亮的颜色来创造清晰简洁的界面
                                    title扁平化设计或平面用户界面色彩在今天的网页设计中相当流行，使用大胆、明亮的颜色来创造清晰简洁的界面
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="collect-favorite">
                        <div className="favorite">
                            <Icon style={{color:'#29B6F6',padding:'0 5px'}} type="folder"></Icon>
                            <a>web前端</a>
                        </div>
                        <div className="conminu">
                            <span>
                                <Icon type="share-alt"></Icon>
                                <a>分享</a>
                            </span>
                            <span>
                                <Icon type="message"></Icon>
                                <a>评论(0)</a>
                            </span>
                            <span>
                                <Icon type="like"></Icon>
                                <a>点赞(0)</a>
                            </span>
                        </div>
                    </div>
                </div>
            </Item>
        )
    }
}


export default CollectList