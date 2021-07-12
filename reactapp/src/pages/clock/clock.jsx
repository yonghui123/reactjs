import React, { Component } from 'react';

class clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    // 1、直接修改state不会重新渲染组件
    /* 
      2、setSate的更细可能是异步的，由于setState可能是异步的，所以逻辑上不应该依赖他们的值来更新下一次的操作，比如自增自减操作
    */
   /* 
      3、react会将多个setState调用合并成成为一个调用
   */
    this.setState({
      date: new Date()
    });
  }
  // 事件绑定
  /*
    react事件中不会默认绑定this，如果使用了this，需要进行绑定this.handleClick.bind(this)
    如果觉得使用 bind 很麻烦，这里有两种方式可以解决
    1、在类组件中，将事件使用箭头函数的方式来定义，由于箭头函数的特殊，会将this绑定未当前类组件
    2、如果没有使用类组件，那么可以使用执行箭头函数的方式onClick={() => this.handleClick()}
  */
  activateLasers = (e) => {
    console.log(e)
    console.log(this)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    return (
      <>
        <h2 onClick={this.activateLasers}>It is {this.state.date.toLocaleTimeString()}.</h2>
      </>
    );
  }
}

export default clock;