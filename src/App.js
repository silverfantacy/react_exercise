import React, { Component } from 'react';
import HelloWorld from './HelloWorld'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld text="今天就開始學React!" maxLeval="5"/>
        <HelloWorld text="今天就放假啦" maxLeval="23"/>
      </div>
    );
  }
}

export default App;
