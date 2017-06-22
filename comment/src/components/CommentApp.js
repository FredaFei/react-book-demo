import React,{ Component } from 'react'
import { render } from 'react-dom'
// 引入组件
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// 挂载节点
const RootDom = document.getElementById('app-comment')

class CommentApp extends Component{
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }
    handleSubmitComment(comment){
        if (!comment) {return}
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
        console.log(comment)
    }
    render(){
        return <div>
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
            <CommentList comments={this.state.comments}/>
        </div>
    }
}
render(<CommentApp />, RootDom)