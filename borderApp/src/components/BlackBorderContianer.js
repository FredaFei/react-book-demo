import React,{ Component } from 'react'
import { render } from 'react-dom'
// 引入组件
import Item from './item'
// 挂载节点
const RootDom = document.getElementById('app-comment')

class BlackBorderContianer extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return <div>
            <Item>
                <h2>React.js 小书</h2>
                <div>开源、免费、专业、简单</div>
                订阅：good
            </Item>
        </div>
    }
}
render(<BlackBorderContianer />, RootDom)