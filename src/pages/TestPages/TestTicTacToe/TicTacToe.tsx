// 井字棋游戏
// 主要参考了 https://zh-hans.reactjs.org/tutorial/tutorial.html 描述完成
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import styles from './TicTacToe.less';

// 为JSX定义新的属性及类型，解决TS代码里，JSX上自定义属性报错的方法
// 2020/5/29更新，这种方式好像对所有的JSXElement的自定义属性都解了绑（其实也没有完全弄懂）
// 既然有了新的，更合理的，更具针对性的方式，就弃用了，仅注释保留作参考
// declare namespace JSX {
//   interface ElementAttributesProperty {
//     props: any; // specify the property name to use
//   }
// }

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

interface SquareProps {
  value: string | number;
  // React.FC并无队onClick的定义，直接作为props引用过来即可
  // onClick 的 TypeScript定义如下
  onClick: (e: React.MouseEvent) => void;
  // 如果是问号代表该成员有可能不存在
  noNeed?: any;
}

// interface SquareState {
//   value: string | number;
// }

// 2020/05/29 重新TypeScript改造，增加props 和 state 的数据类型指定
// 2020/06/06 随着state提升去了Border，Square已经是个pure function，Eslit强制改写
const Square: React.FC<SquareProps> = (props: SquareProps) => (
  // 此处!感叹号的含义是，使用类型断言手动去除props是undefined或null的可能性。
  // 简单说就是不为空
  // props! : {
  //   value: string
  // };

  // 此处定义经测试不能删除，否则state.value被认为是readonly，原理不详待查（2020/5/29）
  // state = {
  //   value: '',
  // };

  // constructor(props: any) {
  //   super(props);
  //   // 注意 data-value后，取值方式的改动
  //   // 注意这个state.value的引用，这种形式只允许在构造函数中出现
  //   // 其他地方请用 setState
  //   this.state.value = props.value;
  // }
  <button
    className={styles.square}
    type="button"
    // 此处不再从states获取数据，而是从Board组件的props传值
    // 由于修改后没有了state的变化，ADP中也不能作为一个class存在
    // 需要写成一个 pure function
    // onClick={() => this.setState({ value: 'X' })}
    // onClick={() => props.onClick()}
    onClick={props.onClick}
  >
    {/* 下面这行代码在刚接触react的时候报错 */}
    {/* 目前有效的解决办法是在这个类中，显式的定义state的value，见37行 */}
    {props.value}
  </button>
);

interface BoardState {
  squares: Array<string | number>;
  xIsNext: boolean;
}

// 目前只定义了state，不定义props
class Board extends React.Component<{}, BoardState> {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  };

  // constructor(props: any) {
  //   super(props);
  // }

  handleClick(i: any) {
    // const squares = this.state.squares.slice();
    // squares[i] = 'X';
    // this.setState({ squares });

    // 上面的写法是有问题的，因为无法直接引用this.state，会引起更新问题
    // 所以需要把更新的过程写成函数，下面就是参考代码
    this.setState((prevState) => {
      const squares = prevState.squares.slice();
      squares[i] = prevState.xIsNext ? 'X' : 'O';
      // { squares: squares } 此处更新了数据
      return {
        squares,
        xIsNext: !prevState.xIsNext,
      };
    });
  }

  // Eslint规则: Enforce that class methods utilize this
  // 类中的函数，强制使用类方法this，如果未使用，则会报错
  // 但此处的renderSquare在测试代码中，采用的是函数的值传递的方式来确定渲染内容
  // 如this.renderSquare(1)，
  // 若要看不见错误，需要加上下面这行eslint的 exceptMethods 说明
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderSquare"] }] */
  renderSquare = (i: string | number) => (
    <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
  );

  render = () => {
    // const status = 'Next player: X';
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {/* 提供一个不同数据类型参数的尝试 */}
          {this.renderSquare(0)}
          {/* 个人觉得写renderSquare是不是多余了 */}
          {/* 2020/6/5 更新:
          之前觉得renderSquare多余，写着写着发现并不是，因为这里最终的目的不是让这个value显示在页面上
          而是希望通过数组来管理这9个格子，value后面跟的不是常量，而是数组的对应项 squares[1] */}
          {/* <Square value={1} /> */}
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
  };
}

const Game: React.FC = () => (
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

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div id="errors" className={styles.errors} />
    <Game />
  </PageHeaderWrapper>
);
