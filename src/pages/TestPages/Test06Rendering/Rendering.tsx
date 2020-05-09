import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import styles from './Rendering.less';

declare namespace JSX {
  interface ElementAttributesProperty {
    props: any;
  }
}

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

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    {/* 这里有个小坑，boolean的props是不能写成 isShown={true} 否则git commit的时候报错 */}
    <Greeting isShown />
    {/* 原本想结合Test05的内容做一个可以切换显示的按钮，
    发现还需要后面的知识，暂时留空 */}
    <Toggle />
  </PageHeaderWrapper>
);
