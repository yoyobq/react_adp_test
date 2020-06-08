import React, { ChangeEvent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import styles from './index.less';

// 0准备工作在第45行，然后按照1，2，3，4，5的方式执行
// 完成Son中的Input框和 Father中的state.sonValue是如何影响的

interface SonProps {
  sonValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Son: React.FC<SonProps> = (props: SonProps) => {
  return (
    // 1 首先是子组件的input接收到了新的value，并触发onChange事件
    // 2 子组件并无onChange事件的响应代码，响应的其实是通过prop传递过来的父组件内的onChange事件
    <input value={props.sonValue} onChange={props.onChange} />
  );
};

interface FatherState {
  sonValue: string;
}

class Father extends React.Component<{}, FatherState> {
  state = {
    sonValue: '',
  };

  constructor(props: any) {
    super(props);
    this.handleSonChange = this.handleSonChange.bind(this);
    // 考虑初始值的情况
    // this.state.sonValue = 'init';
  }

  // 4 函数只做了一件事，根据传入的event修改了对应的state.sonValue的值
  handleSonChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ sonValue: event.target.value });
  };

  render = () => (
    <div>
      {/* 3 可以见到父组件的onChange事件，已经并定义为handleSonChange函数 */}
      {/* 0 一开始的准备工作，父组件在引用子组件时，为子组件定义了两个props， */}
      <Son sonValue={this.state.sonValue} onChange={this.handleSonChange} />
      <p>Input框是Son组件，包含在Father组件中</p>
      {/* 5 最终 state.sonValue 修改了页面，被用户感知 */}
      <p>Father组件读取到Input框的内容为: {this.state.sonValue ? this.state.sonValue : 'null'} </p>
    </div>
  );
}

export default (): React.ReactNode => (
  <PageHeaderWrapper className={styles.main}>
    <Father />
  </PageHeaderWrapper>
);
