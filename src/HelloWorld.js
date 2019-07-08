import React, { Component } from 'react'
import './HelloWorld.scss';


class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {maxLeval: Number(this.props.maxLeval)}
  }
  render() {
    return <h1 className="h1-test" onClick={this.clickfn.bind(this)}>{this.props.text}+{this.state.maxLeval}</h1>
  }
  clickfn(e){
    this.setState((currentState, currrentProps) => ({ maxLeval: currentState.maxLeval + 1}))
  }
}

export default HelloWorld