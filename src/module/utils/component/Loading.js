import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {Spin} from 'antd'


const LoadBox = styled.div`
    position:absolute;
    z-index:9999;
    width:100%;
    height:100%;
    background-color:#D5D8DC;
    opacity:0.8;
    .loading{
        position:absolute;
        width:40px;
        height:40px;
        top:50%;
        left:50%;
        font-size:30px;
        .ant-spin-dot{
            width:40px;
            height:40px;
        }
    }

`

class Loading extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display:'none'
        }

    }

    componentWillMount(){
        
    }

    render() {
        return (
            <LoadBox style={{display:this.props.onVisiable}}>
                <div className="loading">
                    <Spin/>
                </div>
            </LoadBox>
        )
    }
}


export default Loading;