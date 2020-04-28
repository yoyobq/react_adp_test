// // 这是Test系列的第二张页面，目的是完成一个井字棋
// // 思路来自 reactjs.org 的官方教程
// // 主要参考了 https://zh-hans.reactjs.org/tutorial/tutorial.html 描述完成
// import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
// import React from 'react';
// import styles from './TicTacToe.less';

// // 页面布局，参考的是官网教程，由于官网提供的是全新页面的制作，并非ADP
// // 将官网的HTML内容的载入方式，参考的是 Welcome.tsx中的方法
// export default (): React.ReactNode => (
//   <PageHeaderWrapper>
//     <div id="errors" className={styles.errors} />
//     <div id="root"><Game /></div>
//   </PageHeaderWrapper>
// );

// // window.addEventListener('mousedown', function(e: any) {
// //   document.body.classList.add('mouse-navigation');
// //   document.body.classList.remove('kbd-navigation');
// // });
// // window.addEventListener('keydown', function(e: any) {
// //   if (e.keyCode === 9) {
// //     document.body.classList.add('kbd-navigation');
// //     document.body.classList.remove('mouse-navigation');
// //   }
// // });
// // window.addEventListener('click', function(e: any) {
// //   if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
// //     e.preventDefault();
// //   }
// // });
// // window.onerror = function(message, source, line, col, error) {
// //   var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
// //   errors.textContent += text + '\n';
// //   errors.style.display = '';
// // };
// // console.error = (function(old) {
// //   return function error() {
// //     errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
// //     errors.style.display = '';
// //     old.apply(this, arguments);
// //   }
// // })(console.error);

// class Square extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }

//   render() {
//     return (
//       <button
//         className={styles.square}
//         type="button"
//         onClick={ () => { this.setState({value: 'X'}); }}
//       >
//         {/* 下面这行代码有些问题，暂不处理 */}
//         {this.state.value}
//       </button>
//      )
//   }
// }

// class Board extends React.Component {
//   renderSquare(i: any) {
//     {/* 下面这行代码有些问题，暂不处理，问题似乎出在数据类型的定义上 */}
//     return <Square value={i} />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className={styles.status}>{status}</div>
//         <div className={styles.boardRow}>
//           {this.renderSquare('a')}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className={styles.boardRow}>
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className={styles.boardRow}>
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         {/* 很有意思的东西，不知道是less还是recat，不支持style的className中带有'-' */}
//         {/* 提供一种解决此问题的写法，留档做参考{styles[`progress-${passwordStatus}`]} */}
//         <div className={styles[`game-info`]}>
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }
