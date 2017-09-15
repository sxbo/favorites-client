//这里是专门负责路由配置的，我把它放在public部分中
import React from 'react';
import Favorite from '__module/favorite/Favorite.js';
import Feedback from '__module/favorite/Feedback.js';
import Login from '__module/favorite/Login.js';


export const routes = {
    routes:[
    {
        path:'/', //favorite网站主页
        exact:true,
        name:'home',
        icon:'home',
        compnent:()=><Favorite />
    },
    {
        path:'/login',//登录页面
        name:'login',
        icon:'login',
        compnent:()=><Login/>
    },
    {
        path:'/feedback',//用户反馈页面
        name:'feedback',
        icon:'feedback',
        compnent:()=><Feedback/>
    },
]
}

