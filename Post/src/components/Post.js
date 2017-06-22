import React,{ Component } from 'react'

class Post extends Component{
    constructor(props){
        super(props)
        this.state = {
            pHeight: 0
        }
    }
    handleGetLength(){
        this.pHeight = this.p.clientHeight
        console.log(this.pHeight)
    }
    
    render(){
        return <p ref={p=>{this.p=p}} onClick={this.handleGetLength.bind(this)}>{this.props.content}</p>
    }
}
export default Post