import React, { Component } from 'react';
import Pyoko from './Pyokopyoko.png';
import Giggle from './Giggle.png';
import './Cell.scss';

class Cell extends Component {
  render() {
    // 根據 mark 的資料，決定框框中的文字。-1:"", 0:"O", 1:"X"
    let url = "";
    if (this.props.mark === 0) {
      url = Pyoko
    } else if (this.props.mark === 1) {
      url = Giggle
    }
    // let text = "";
    // if (this.props.mark === 0) {
    //   text = "O";
    // } else if (this.props.mark === 1) {
    //   text = "X";
    // }
    return (
      <div className="cell" onClick={this.click.bind(this)}>
        <img src={url} alt=""></img>
      </div>);
  }
  click() {
    this.props.update(this.props.index);
  }
}

export default Cell;