import React from 'react'
import {render} from 'react-dom'


import styled from 'styled-components'
import {notification} from 'antd'


const Root = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    .page-title{
        height:80px;
        text-align:center;
        line-height:80px;
        font-size:25px;
        color:#4FC3F7;
        background:#F8F9F9;
    }
    .page-content{
        font-size:15px;
        min-width:30px;
        .clound-btn{
            background-color:#7DCEA0;
            display:inline-block;
            text-align:center;
            line-height:30px;
            height:30px;
            border-radius:5px;
            width:70px;
            font-size:15px;
            text-decoration:none;
        }
    }
    .page-picture{
        flex-grow:1;
        display:flex;
        align-items:center;
        justify-content:center;
        .gif{
            
        }
    }

    
`
const gif = require('../../../res/img/useTool.gif')

class CollectTool extends React.Component{

    onButtonClock(e){
        //这里添加其他处理
        notification.info(
            {
                placement:'topLeft',
                duration:2,
                message:"请将该按钮拖动到浏览器书签栏上！"
            }
        )
        e.preventDefault()
    }

    render(){
        return(
            <Root>
                <div className="page-title">收集指引工具</div>
                <div className="page-content">
                    <span>
                        网页收集工具<a href="javascript:(function()%7Bvar%20description;var%20desString=%22%22;var%20metas=document.getElementsByTagName(&#39;meta&#39;);for(var%20x=0,y=metas.length;x%3Cy;x++)%7Bif(metas%5Bx%5D.name.toLowerCase()==%22description%22)%7Bdescription=metas%5Bx%5D;%7D%7Dif(description)%7BdesString=%22&amp;amp;description=%22+encodeURIComponent(description.content);%7Dvar%20win=window.open(%22http://localhost:88/collectPage?from=webtool&amp;url=%22+encodeURIComponent(document.URL)+desString+%22&amp;title=%22+encodeURIComponent(document.title)+%22&amp;charset=%22+document.charset,&#39;_blank&#39;);win.focus();%7D)();" className="clound-btn" onClick={this.onButtonClock.bind(this)}>云收藏</a>(将该按钮拖(上下)动至浏览器书签栏,如下图)
                    </span>
                </div>
                <div className="page-picture">
                    <img className="gif" src={gif}/>
                </div>
            </Root>
        )
    }
}

export default CollectTool;