import axios from 'axios'
import {ActionType} from '../reducer/R'
import {message} from 'antd'

export default {
    collect_create:(collect,onSuccess) =>dispatch =>{
        axios.post('/collect/collect',collect)
        .then(res =>res.data)
        .then(data =>{
            if(data.code === "000000"){
                dispatch({type:ActionType.COLLECT_CREATE,data:data.data})
                onSuccess?onSuccess():'';
            }else{
                message.warn(data.msg)
            }
        })
        .catch(
            err =>{
            if(err.response){
                message.error("操作失败！")
            }
        })
    },

    favorite_create:(name,onSuccess) =>dispatch =>{
        axios.post(`/fav/add?name=${name}`,)
        .then(res =>res.data)
        .then(data =>{
            if(data.code === "000000"){
                dispatch({type:ActionType.FAVOTITE_CREATE,data:data.data})
                onSuccess?onSuccess():'';
            }else{
                onSuccess?onSuccess():'';
                message.warn(data.msg)
            }
        })
        .catch(
            err =>{
            onSuccess()
            if(err.response){
                message.error("操作失败！")
            }
        })
    },

    getMyFavorites:(userId,onSuccess) =>dispatch =>{
        axios.post(`/fav/get/${userId}`)
        .then(res =>res.data)
        .then(data =>{
            if(data.code =="000000"){
                dispatch({
                    type:ActionType.COLLECT_GET_FAVORITES,
                    data:data.data
                })
                onSuccess?onSuccess():''
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },
    loadCollectObject:props =>(
        {
            type:ActionType.COLLECT_lOAD,
            data:props
        }

    ),
    getLogoImage:(url,onSuccess)=>dispatch=>{
        let u = new FormData()
        u.append("url",url)
        axios.post('/collect/getCollectLogoUrl',u)
        .then(res=>res.data)
        .then(data=>{
            if(data.code=="000000"){
                dispatch(
                    {
                        type:ActionType.COLLECT_LOAD_LOGO,
                        data:data.data
                    }
                )
                onSuccess?onSuccess():''
            }
        })
        .catch(err=>{
            onSuccess?onSuccess():''
            message.error(err)
            } 
        )
    }

    
}