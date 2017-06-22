import React,{ Component } from 'react'

class Item extends Component{
    
    render(){
        return (
            <div className='box'>
                {this.props.children.map(item=>{
                    return <div className='age'>{item}</div>
                })}
            </div>)
    }
}
// <div className='name'>{this.props.children[0]}</div>
// <p className='age'>
//     My Age：<span>{this.props.children[1]}</span>
// </p>
// <div className='divChid'>
//     {this.props.children[2]}
// </div>
export default Item