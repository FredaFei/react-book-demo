import React, { Component } from 'react'

class PercentageShower extends Component{
    render(){
        let num = this.props.iptVal
        let result = new Number(num)*100
        result = result.toFixed(2)

        return ( <p>{ num>0 && num<1 ? result : num.toFixed(2) }%</p> )
    }
}

export default PercentageShower