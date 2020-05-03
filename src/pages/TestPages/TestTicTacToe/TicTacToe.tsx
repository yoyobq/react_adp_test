// 这是Test系列的第二张页面，目的是完成一个井字棋
// 思路来自 reactjs.org 的官方教程
// 主要参考了 https://zh-hans.reactjs.org/tutorial/tutorial.html 描述完成
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import React from 'react';
import styles from './TicTacToe.less';

// 为JSX定义新的属性及类型，解决TS代码里，JSX上自定义属性报错的方法
declare namespace JSX {
  interface ElementAttributesProperty {
    props: any; // specify the property name to use
  }
}

// window.addEventListener('mousedown', function(e: any) {
//   document.body.classList.add('mouse-navigation');
//   document.body.classList.remove('kbd-navigation');
// });
// window.addEventListener('keydown', function(e: any) {
//   if (e.keyCode === 9) {
//     document.body.classList.add('kbd-navigation');
//     document.body.classList.remove('mouse-navigation');
//   }
// });
// window.addEventListener('click', function(e: any) {
//   if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
//     e.preventDefault();
//   }
// });
// window.onerror = function(message, source, line, col, error) {
//   var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
//   errors.textContent += text + '\n';
//   errors.style.display = '';
// };
// console.error = (function(old) {
//   return function error() {
//     errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
//     errors.style.display = '';
//     old.apply(this, arguments);
//   }
// })(console.error);

class Square extends React.Component {
  // 此处!感叹号的含义是，使用类型断言手动去除props是undefined或null的可能性。
  props!: {
    value: string;
  };

  // 定义 state.value
  state = {
    value: null,
  };

  constructor(props: any) {
    super(props);
    // 注意 data-value后，取值方式的改动
    this.state.value = props.value;
  }

  render() {
    return (
      <button
        className={styles.square}
        type="button"
        onClick={() => {
          this.setState({ value: 'X' });
        }}
      >
        {/* 下面这行代码在刚接触react的时候报错 */}
        {/* 目前有效的解决办法是在这个类中，显式的定义state的value，见37行 */}
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  // Eslint规则: Enforce that class methods utilize this
  // 类中的函数，强制使用类方法this，如果未使用，则会报错
  // 但此处的renderSquare在测试代码中，采用的是函数的值传递的方式来确定渲染内容
  // 如this.renderSquare(1)，
  // 若要看不见错误，需要加上下面这行eslint的 exceptMethods 说明
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderSquare"] }] */
  renderSquare(i: any) {
    // 嵌套组件传值的问题目前看来我目前还解决不了，暂存（2020/5/2)
    // 这边的value报错，看来和传值无关，猜想是自定义属性的问题，教程中提供的value，并不是一个合法的html自定义属性
    // 从html5开始，有一套很方便的自定义属性的方式  data-xxxx，获取自定义属性则是 dataset.xxxx 方法
    // return <Square value={i} />;
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare('a')}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      {/* 很有意思的东西，不知道是less还是recat，不支持style的className中带有'-' */}
      {/* 提供一种解决此问题的写法，留档做参考{styles[`progress-${passwordStatus}`]} */}
      <div className={styles[`game-info`]}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div id="errors" className={styles.errors} />
    <Game />
  </PageHeaderWrapper>
);
