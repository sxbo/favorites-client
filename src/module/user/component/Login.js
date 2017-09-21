//用户登录页面，包括登录逻辑
import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {Form,Icon,Input,Button,Checkbox} from 'antd'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'

import userAction from '../action/Action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const FormItem = Form.Item;
const Root = styled.div`
     width:100%;
     height:100%;
     display:flex;
     justify-content:center;
     background-color:#EAECEE;
    .login-form{
        margin-top:40px;
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



class LoginForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loginstatus:false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              let {login} = this.props;
              login (values,(user)=>{
                  //登录成功后前端要做的事
                  //this.props.history.push("/main")
                  sessionStorage.setItem("user",user);
                  this.setState({
                      loginstatus:true
                  })

              })
          }
        });
    }

    render () {
        const { getFieldDecorator } = this.props.form;
        if (this.state.loginstatus){
            return <Redirect to="/main"></Redirect>
        }

        return (

            <Root>
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit} >
                        <div className="logo">
                            <Link to="/"><img src={require('../../../res/img/logo.png')}/></Link>
                        </div>
                        <div className="title">请登录</div>
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('passWord', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                            Or <Link to="/regist">register now!</Link>
                        </FormItem>
                    </Form>
                </div>
            </Root>
        )
    }
}


const Login = Form.create()(LoginForm);

function mapStateToProps(state) {
    return {
        user:state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators (userAction,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
