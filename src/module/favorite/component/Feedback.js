//用户反馈页面
import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {BrowserRouter as Router ,Route,Link } from 'react-router-dom'
import {Form,Icon,Input,Button,Checkbox} from 'antd'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import  favoriteAction from '../action/Action'

const FormItem = Form.Item;




const Root = styled.div`
     width:100%;
     height:100%;
     display:flex;
     justify-content:center;
     background-color:#EAECEE;
    .login-form{
        margin-top:40px;
        width:300px;
        max-width:320px;
        height:25px;
        .logo{
            background-color:#3a3f51;
            text-align:center;
        }
        .title{
            text-align:center;
            font-size:20px;
            margin:20px 0;
        }
        .login-form-button{
            width:100%;
        }

        .ant-form{
            background-color:#fff;
            padding:20px;
            
        }

    }
`
/**
 *@Author xiaobo  [https://github.com/sxbo]
 *@Date 2017/9/16 16:13
 */
class FeedbackComponent extends React.Component{

    componentWillMount () {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              let {favFeedback} = this.props;
              favFeedback(values);
          }
        });
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (   
            <Root>
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit} >
                        <div className="logo">
                            <Link to="/"><img src={require('../../../res/img/logo.png')}/></Link>
                        </div>
                        <div className="title">欢迎反馈</div>
                        <FormItem>
                        {getFieldDecorator('feedBackAdvice', {
                            rules: [{ required: true, message: 'Please input your feedback!' }],
                        })(
                            <Input.TextArea rows={4} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="input your feedback!" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('feedBackName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="your name" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />}  placeholder="your link" />
                        )}
                        </FormItem>
                        
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            sign in
                        </Button>
                        
                    </Form>
                </div>
            </Root>
        )
    }
}

const Feedback = Form.create()(FeedbackComponent);

/**
 *
 * @param state :redux store state
 * @returns {{}}
 */
function mapStateToProps(state) {
    return {
        favorite:state.favorite
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(favoriteAction,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Feedback);