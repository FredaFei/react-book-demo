import React, { Component } from 'react'
import { render } from 'react-dom'
// 引入组件
import Input from './Input'
import PercentageShower from './PercentageShower'
// 挂载节点
const RootDom = document.getElementById('app-comment')


class PercentageApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            val: 0
        }
    }
    getVal(value){
        this.setState({
            val: value
        })
    }
    render(){
        return (
        <div>
            <Input getVal={this.getVal.bind(this)}/>
            <PercentageShower iptVal={this.state.val} />
        </div>)
    }
}

render(<PercentageApp />, RootDom)