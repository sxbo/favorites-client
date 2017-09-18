import  {ActionType} from '../res/R'
import axios from 'axios'
import {message} from 'antd'

export default {
    regist: (user) =>dispatch =>{
        axios.post('/user/regist',user)
            .then(res => res.data)
            .then(data =>{
                if (data.code === "000000"){
                    message.success(data.msg);
                    dispatch({type:ActionType.USER_REGIST,data:data.data})
                }else {
                    message.error(data.msg)
                }
            })
            .catch(error =>{
                if (error.response){
                    message.error("请求失败，请检查服务器！")
                }
            })
}
}