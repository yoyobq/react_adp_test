// React 组件（component）和 props 的自学页面
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import styles from './ChoiceComponent.less';

function Welcome(props: any): any {
  // 注意： 组件名称必须以大写字母开头。小写字母开头的会被认为是原生组件，如<div>
  return <h1 className={styles.testStyle}>Hello, {props.name}</h1>;
}

const element: any = <Welcome name="alex" another="another" />;

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    {/* 以下两种形式均支持将Component渲染到页面 */}
    {element}
    <Welcome name="Miyo" />
  </PageHeaderWrapper>
);
