// React 组件（component）和 props 的自学页面
import { message } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import React from 'react';
// import styles from './Event.less';

function ActionLink() {
  function handleClick(event: any) {
    // 阻止默认事件，
    // 注意，在html里写return false;对于recat来说是不行的，当然，这种写法本身也过于丑陋，就不提了。
    event.preventDefault();
    message.info('你再点我一次看看！！');
  }

  // 关于传递的event浏览器事件，详见https://zh-hans.reactjs.org/docs/events.html
  return (
    // 传递的其实是浏览器事件
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

class Toggle extends React.Component {
  state = {
    // 这里肯定有我的理解问题，为什么要给初值？
    isToggleOn: true,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    // 下面这句话，有两个关键的地方（基于2020/05/01的理解）
    /*
     * 1 利用 this.setState( ) 进行赋值的时候，系统提示，
     * Use callback in setState when referencing the previous state
     * 引用前一个状态时在setState中需要使用回调函数，所以不写回调会报错
     */

    // this.setState({
    //   isToggleOn: !this.state.isToggleOn
    // });
    /*
     * 2 (state) => {  } TS回调函数，勿忘定义参数的数据类型
     *   这么写显然是不行的。考虑到state是个object，所以给 state: any，这样的定义
     */
    this.setState((state: any) => ({
      // 这里的this就是 JSX Toggle
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      // class 的方法默认不会绑定 this。如果你忘记把 this.handleClick 绑定到 onClick 事件，
      // 当你调用这个函数的时候 this 的值为 undefined。
      // error    Missing an explicit type attribute for button
      <button type="button" onClick={this.handleBtnClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// 此处有一问，与Test01中相比，多了 React.ReactNode, 这就是TS要求的，给数据类型（一个React结点）
export default (): React.ReactNode => (
  // 此标签的作用是在页面首部提供一个面包屑页头
  <PageHeaderWrapper>
    <ActionLink />
    <br />
    <Toggle />
  </PageHeaderWrapper>
);
