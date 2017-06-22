import React, { Component } from 'react'

class Input extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal: 0
        }
    }
    handleChangeVal(e){
        this.setState({
            inputVal: e.target.value
        })
        this.props.getVal && this.props.getVal(e.target.value)
    }
    render(){
        return (<input value = {this.state.inputVal} onChange={this.handleChangeVal.bind(this)} />)
    }
}

export default Input