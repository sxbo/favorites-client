import  {ActionType} from '../reducer/R'
import  axios from 'axios'
import {message} from 'antd'
export default {
    favFeedback:(feedback) =>dispatch =>{
        axios.post('/feedback/save',feedback)
            .then(res =>res.data)
            .then(data =>{
                if (data.code === "000000"){
                    message.success(data.msg)
                    dispatch({type:ActionType.FAV_FEEDBACK,data:data.data})
                }else {
                    message.error(data.msg)
                }
            })
            .catch(err => {
                if (err.response) {
                    message.warn("请求失败，请检查服务器！")
                }
                }
            )
    }
}
