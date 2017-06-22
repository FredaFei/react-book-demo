import React,{ Component } from 'react'
import { render } from 'react-dom'
// 引入组件
import Post from './Post'
// 挂载节点
const RootDom = document.getElementById('app-comment')

class PostApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            content: 'hello reactjs !'
        }
    }
    
    render(){
        return <div>
            <Post content={this.state.content} />
        </div>
    }
}
render(<PostApp />, RootDom)