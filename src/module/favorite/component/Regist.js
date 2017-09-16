//用户反馈页面
import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {BrowserRouter as Router ,Route,Link } from 'react-router-dom'
import {Form,Icon,Input,Button,Checkbox} from 'antd'
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
class RegistComponent extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
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
                        <div className="title">新用户快速注册</div>
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="username" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('passWord', {
                            rules: [{ required: true, message: 'Please input your passWord!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="passWord" placeholder="password" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />}  placeholder="email" />
                        )}
                        </FormItem>
                        
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            sign in
                        </Button>
                        <div className="title">
                            已有用户？
                        </div>
                        <Button type="primary"  className="login-form-button">
                            to login
                        </Button>
                    </Form>
                </div>
            </Root>
        )
    }
}

const Regist = Form.create()(RegistComponent);
export default Regist;