import React, { Component } from 'react';
import './Line.scss'

class Line extends Component {
  render() {
    // 根據贏家的資訊：startIndex 和 endIndex，把線條用 svg 標籤畫在畫面上
    let startX = this.props.startIndex % 3;
    let startY = Math.floor(this.props.startIndex / 3);
    let endX = this.props.endIndex % 3;
    let endY = Math.floor(this.props.endIndex / 3);
    console.log('x1=>', startX * 100 + 50, 'y1=>', startY * 100 + 50
, 'x2=>', endX * 100 + 50, 'y2=>', endY * 100 + 50,);
    return <svg className="line"><line x1={startX * 100 + 50} y1={startY * 100 + 50} x2={endX * 100 + 50} y2={endY * 100 + 50} stroke="red" strokeWidth="5" /></svg>;
  }
}

export default Line;