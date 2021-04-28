/* eslint-disable max-classes-per-file */
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import styles from './Rendering.less';

// eslint-disable-next-line @typescript-eslint/no-namespace
// declare namespace JSX {
//   interface ElementAttributesProperty {
//     props: any;
//   }
// }

function Welcome(props: any): any {
  return <h1 className={styles.testStyle}>Hello, {props.name}</h1>;
}

class Hello extends React.Component {
  props!: {
    data: string;
  };

  state = {
    data: null,
  };

  constructor(props: any) {
    super(props);
    this.state.data = props.data;
  }

  render() {
    return <div className={styles['test-Style']}>{this.state.data}</div>;
  }
}

class Toggle extends React.Component {
  state = {
    isToggleOn: true,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    this.setState((state: any) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button type="button" onClick={this.handleBtnClick}>
        {this.state.isToggleOn ? 'show <Welcome>' : 'show <Hello>'}
      </button>
    );
  }
}

class Greeting extends React.Component {
  props!: {
    isShown: boolean;
  };

  state = {
    isShown: true,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      isShown: props.isShown,
    };

    // this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  render() {
    if (this.state.isShown) {
      return <Welcome name="Welcome Alex!" />;
    }
    return <Hello data="Hello, Friend." />;
  }
}

class Greeting2 extends React.Component {
  props!: {
    isShown: boolean;
  };

  state = {
    isShown: true,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      isShown: props.isShown,
    };

    // this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  render() {
    const { isShown } = this.state;
    return (
      // 注意外层的div和三目运算符转弯的写法
      <div>{isShown ? <Welcome name="Welcome Alex!" /> : <Hello data="Hello, Friend." />}</div>
    );
  }
}

function Mailbox(props: any) {
  // 此处请注意下面的写法会引起eslint报错，强制使用es6的解构赋值
  // const unreadMessages = props.unreadMessages;
  const { unreadMessages } = props;
  return (
    <div>
      {unreadMessages.length > 0 && <h4>You have {unreadMessages.length} unread messages.</h4>}
    </div>
  );
}
const messages = ['React', 'Re: React', 'Re:Re: React'];

// 以下是一段利用直接return null终止渲染的示例代码，
// 由于代码本身逻辑简单，就是强行return，就不再页面内实现了（实现了也看不着）
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    {/* 这里有个小坑，boolean的props是不能写成 isShown={true} 而应该直接写 isShown 即可否则git commit的时候报错 */}
    <h2>1 基本例子，代码里的Greeting部分</h2>
    <Greeting isShown={false} />
    {/* 原本想结合Test05的内容做一个可以切换显示的按钮，发现还需要后面的知识，暂时留空 */}
    <div>此按钮暂时无效</div>
    <Toggle />
    <hr />
    <h2>2 与运算符的例子，代码里的&&</h2>
    <Mailbox unreadMessages={messages} />
    <hr />
    <h2>3 三目运算符的例子</h2>
    <Greeting2 isShown />
    <hr />
    <h2>4 终止渲染内容请见代码中相关注释</h2>
    {/* <WarningBanner /> */}
  </PageHeaderWrapper>
);
