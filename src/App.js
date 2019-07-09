import React, { Component } from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import Cell from './Cell';
import Line from './Line';
import Nav from './Nav';
import routes from './routes';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    /*
      0 1 2
      3 4 5
      6 7 8
    */
    // 應用程式裝狀態
    this.state = {
      circle: 0,
      marks: [-1, -1, -1, -1, -1, -1, -1, -1, -1], //  標記： -1 無, 0 圈, 1叉
      winner: null // 贏家資訊， null 代表沒有
    }
  }
  render() {
    const matchedRoutes = matchRoutes(routes, this.props.location.pathname);
    let cells = [];
    for (let i = 0; i < this.state.marks.length; i += 1 ) {
      cells.push(
        <Cell key={i} index={i} mark={this.state.marks[i]} update={this.updateMark.bind(this)}/>
      );
    }
    if (this.state.winner !== null) {
      console.log('this.winner', this.winner)
      cells.push(<Line key={new Date()} startIndex={this.state.winner.startIndex}
        endIndex={this.state.winner.endIndex} />);
      alert('你贏了')
    }
    console.log('測試',this.props)
    return (<div><div className="container">
      {/* The corresponding component will show here if the current URL matches the path */}
      <Nav  />
      <nav>
        <ol className="breadcrumb">
          {matchedRoutes.map((matchRoute, i) => {
            const { path, breadcrumbName } = matchRoute.route;

            // check whether the the path is the Page path user currently at
            const isActive = path === this.props.location.pathname;

            // if the Page path is user currently at, then do not show <Link />
            return isActive ? (
              <li key={i} className="breadcrumb-item active">
                {breadcrumbName}
              </li>
            ) : (
                <li key={i} className="breadcrumb-item">
                  <Link to={path}>{breadcrumbName} </Link>
                </li>
              );
          })}
        </ol>
      </nav>
      
      {/* Refactor for using routes config */}
      {renderRoutes(routes)}
    </div><div className="board">{cells}</div></div>);
  }
  updateMark(index){
    console.log('啟動', index)
    this.setState((preState) => {
      console.log('preState', preState)
      let currentMark = preState.marks[index];
      if(currentMark===-1 && preState.winner===null) {
        let mark =preState.circle % 2;
        preState.marks[index] = mark;
        let winner = this.checkWinner(preState.marks); // 偵測贏家
        return {
          circle: preState.circle + 1,
          marks: preState.marks,
          winner: winner
        };
      }
    })
  }
  checkWinner(marks) {
    /*
      若有贏家，回傳
      {side:贏家是圈或叉, startIndex:線條起點框框編號, endIndex:線條終點框框編號}
    */
    /*
      框框在 marks 中的編號 (index)
      0 1 2
      3 4 5
      6 7 8
    */
    // 偵測水平方向的三條線是否有相同的標記
    // let index;
    for (let y = 0; y < 3; y++) {
      if (marks[y * 3] !== -1 && marks[y * 3] === marks[y * 3 + 1] && marks[y * 3 + 1] === marks[y * 3 + 2]) {
        return { side: marks[y * 3], startIndex: y * 3, endIndex: y * 3 + 2 };
      }
    }
    // 偵測垂直方向的三條線是否有相同的標記
    for (let x = 0; x < 3; x++) {
      if (marks[x] !== -1 && marks[x] === marks[3 + x] && marks[3 + x] === marks[2 * 3 + x]) {
        return { side: marks[x], startIndex: x, endIndex: 2 * 3 + x };
      }
    }
    // 偵測斜線方向的兩條線是否有相同的標記
    if (marks[0] !== -1 && marks[0] === marks[4] && marks[4] === marks[8]) {
      return { side: marks[0], startIndex: 0, endIndex: 8 };
    } else if (marks[2] !== -1 && marks[2] === marks[4] && marks[4] === marks[6]) {
      return { side: marks[2], startIndex: 2, endIndex: 6 };
    }
    // 目前還沒有贏家
    return null;
  }
}

export default App;
