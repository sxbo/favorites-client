/**
 * 某个收藏夹的页面的内容
 */

 import React from 'react'
 import {render} from 'react-dom'

 import CollectList from './CollectList'


 class FavoriteContent extends React.Component{

    render(){
        return (
            <div>
                <CollectList></CollectList>
            </div>
            )
    }
 }

 export default FavoriteContent