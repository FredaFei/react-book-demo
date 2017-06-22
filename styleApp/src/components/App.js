import React,{ Component } from 'react'
import { render } from 'react-dom'
// 引入组件
import getDefaultStyledPost from './getDefaultStyledPost'
// 挂载节点
const RootDom = document.getElementById('app-comment')

const Post = getDefaultStyledPost({ color: 'red' })

render(<div>
    <Post style={{ color: 'blue', fontSize: '13px' }} />
    <Post style={{ fontSize: '12px' }} />
</div>, RootDom)

