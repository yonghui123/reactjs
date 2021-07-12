import React, { Component } from 'react';
import Clock from '../clock'
import './hello-world.scss'
class HelloWorld extends Component {
  
  render() {
    return (
      <div className="hellowrold">
        hello world
        <Clock></Clock>
      </div>
    );
  }
}

export default HelloWorld;