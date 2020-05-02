// 一个真正的BlankPage
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import styles from './Rendering.less';

function Welcome(props: any): any {
  return <h1 className={styles.testStyle}>Hello, {props.name}</h1>;
}

class Hello extends React.Component {
  state = {
    data: null,
  };

  constructor(props: any) {
    super(props);
    this.state.data = props['data-data'];
  }

  render() {
    return <div className={styles['test-Style']}>{this.state.data}</div>;
  }
}
export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Welcome name="Alex" />
    <Hello data-data="Hi, Friend" />
  </PageHeaderWrapper>
);
