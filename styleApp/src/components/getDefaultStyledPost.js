import React,{ Component } from 'react'

const getDefaultStyledPost = (defaultStyle) => {
  return (
    class Post extends React.Component {
      render() {
        // const style = { ...defaultStyle, ...this.props.style }
        const style = Object.assign({}, defaultStyle, this.props.style)
        return (
          <p style={style}>hello react</p>
        )
      }
    }
  )
}  

export default getDefaultStyledPost