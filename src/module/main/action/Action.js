import {ActionType} from '../res/R'

//action的职责是定义一个动作方法（可能与后台数据交互），最终动作执行后的数据，该数据是一个对象包括一个type属性和一个data属性

export default {
    loadCollectObject:props =>(
        {
            type:ActionType.LOAD_COLLECT_OBJECT,
            data:props
        }

    )
}