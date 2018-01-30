import React, { Component } from 'react';
import lodash from 'lodash'

const _ =require('lodash')
export default class A extends Component {
  constructor () {
    super()
    this.state = {
      datas: []
    }
  }
  componentIWillMount () {
    this.setState({
      datas: this.props.datas
    })
  }
  sub () {
    let num= this.refs.val.value
    if (!num) return alert('请正常输入')
    let datas = _.clone(this.state.datas)
    datas.push(num)
    this.setState({
        datas:datas
    })
    console.log(datas)
  }
  remove (k) {
    this.state.datas.splice(k, 1)
      this.setState({
        datas: this.state.datas
      })
      console.log(this.state.datas)
  }
  componentDidUpdate () {
    
  }
  render () {
    return (
      <div class="box">
        <input type='text' placeholder='添加的任务' ref='val'/>
        <input type="button" value='点击增加' onClick={this.sub.bind(this)}/>
        <ul>
          {
            _.map(this.state.datas, (v, k) => {
              return (
                <li onClick={this.remove.bind(this, k)}> { v } </li>
              ) 
            })
          }
        </ul>
      </div>
    )
  }
} 