import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';

// 本例来自对 https://zh-hans.reactjs.org/docs/state-and-lifecycle.html 内容的改造

// （1）先来一个Tick（每一跳) 组件
// function Tick() {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// （2）组件内部，会更新管理数据，就不是一个pure function了，可以改造成class，
//  注意，在这里class名字改成了Clock，因为他已经不是用于每一tick渲染的组件，而是一个完整的时钟了。
class Clock extends React.Component {
  // 由于集成了React.Component类的内容，必然存在React.Component.state的数据
  // 所以如果简单的 直接修改 super中的属性，就会造成报错
  // 这里采用了adp提供的一种修改方式
  state = {
    date: new Date(),
  };

  // (3)准备一个timer
  // 这个timerID的定义也很有意思，虽然代码可行，带目前还不是非常理解
  // 比如这个形式到底是在声明类型，还是在利用赋值确定数据类型
  // 再比如这种会变化的内容，到底应不应该放在State里，从运行结果来看，放和不放都可以在页面上调用
  timerID: any;

  // (2)做个构造函数，为this.state赋初值
  constructor(props: any) {
    super(props);
    // (2) 想要为 state.date 赋值
    // ！！！（此理解有误）经测试这两个方法都行，但看ADP的范例代码里用了 setState 方法！！！
    // 方法B是官网推荐的在构造函数中修改state的方法，方法A用于其他场合
    // 这是方法A
    // this.setState({
    //   date: new Date(),
    // });
    // 这是方法B
    this.state.date = new Date();
  }

  // (3)利用lifecycle完成计时更新
  // 当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // 同时，当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（unmount）”。
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        {/* 因为是class,记得this关键字，另需注意state的用法 */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// （1）要求定时更新每一跳，做了一个尝试
// const element = setInterval(Tick, 1000);

// 此处有一问，与Test01中相比，多了 React.ReactNode, 这就是TS要求的，给数据类型（一个React结点）
export default (): React.ReactNode => (
  // 此标签的作用是在页面首部提供一个面包屑页头
  <PageHeaderWrapper>
    {/* (1)这里就出问题了，定时更新的只是Tick，没有重新渲染，我尝试了下，水平不够，没法定时重新渲染 */}
    {/* {element} */}
    {/* (2) 以后只在相同节点中渲染，仅提供一个Clock组件即可 */}
    <Clock />
  </PageHeaderWrapper>
);
