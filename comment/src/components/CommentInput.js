import React, { Component } from 'react'

class CommentInput extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
        console.log('user')
    }
    handleContentChange(e){
        this.setState({
            content: e.target.value
        })
        console.log('comment')
    }
    handleSubmit(e){
        if (this.props.onSubmit) {
            const { username,content } = this.state
            this.props.onSubmit({ username,content })
        }
        this.setState({ content: '' })
        console.log('submit')
    }
    render(){
        return (
        <div className='input-box'>
            <div className='comment-field'>
                <span className='comment-field-name'>username: </span>
                <div className='comment-field-input'>
                    <input value = {this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                </div>
            </div>
            <div className='comment-field'>
                <span className='comment-field-name'>comment: </span>
                <div className='comment-field-input'>
                    <textarea value = {this.state.content} onChange={this.handleContentChange.bind(this)} />
                </div>
            </div>
            <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>submit</button>
            </div>
        </div>)
    }
}

export default CommentInput