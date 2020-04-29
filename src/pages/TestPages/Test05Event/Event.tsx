// React 组件（component）和 props 的自学页面
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import React from 'react';
// import styles from './Event.less';

function ActionLink() {
  function handleClick(event: any) {
    // 阻止默认事件，
    // 注意，在html里写return false;对于recat来说是不行的，当然，这种写法本身也过于丑陋，就不提了。
    event.preventDefault();
    console.log('The link was clicked.');
    alert('NO NO NONO NO');
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这里的this就是 JSX Toggle
    console.log('this is:', this);
    // error    Use callback in setState when referencing the previous state  react/no-access-state-in-setstate
    // this.setState({
    //   isToggleOn: !this.state.isToggleOn
    // });
    // this.setState(state => ({
    //   isToggleOn: !this.state.isToggleOn
    // }));
  }

  render() {
    return (
      // class 的方法默认不会绑定 this。如果你忘记把 this.handleClick 绑定到 onClick 事件，
      // 当你调用这个函数的时候 this 的值为 undefined。
      // error    Missing an explicit type attribute for button
      <button type="button" onClick={this.handleClick}>
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
