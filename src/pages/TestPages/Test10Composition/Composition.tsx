import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import styles from './Composition.less';

const FancyBorder = (props: any) => (
  <div className={`FancyBorder FancyBorder-${props.color}`}>
    {/* 定义组件时，若无法预知组件内部情况，可用 props.children 协助子组件的传递 */}
    {props.children}
  </div>
);

const WelcomeDialog: React.FC = () => (
  <FancyBorder color="blue">
    {/* 这两个就是传递进来的子组件 */}
    <h1 className="Dialog-title">Welcome</h1>
    <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
  </FancyBorder>
);

// 除了 props.children ，也可用自行改约定的名称
interface SplitPaneProps {
  top: JSX.Element;
  bottom: JSX.Element;
}

const SplitPane: React.FC<SplitPaneProps> = (props: SplitPaneProps) => (
  <div className="SplitPane">
    <div className="SplitPane-top">{props.top}</div>
    <div className="SplitPane-bottom">{props.bottom}</div>
  </div>
);

const Top: React.FC = () => <h1>I&apos;m top</h1>;

const Bottom: React.FC = () => <h1>I&apos;m bottom</h1>;

// 观察父组件往子组件通过props传值的方式
// 子，带“插槽”
const Dialog = (props: any) => {
  return (
    <FancyBorder color="red">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
};

// 父
const ByeDialog = () => <Dialog title="Bye" message="Thank you for visiting again!" />;

// 官网教程这一部分的标题是“组合vs继承”，本例只讨论了组合
// 原因在官网已经说明：在 Facebook，我们在成百上千个组件中使用 React。我们并没有发现需要使用继承来构建组件层次的情况。
// Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。
// 如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。

// 简单的说React所有情况下都不建议用“继承”
export default () => {
  return (
    <PageHeaderWrapper className={styles.main}>
      <WelcomeDialog />
      <SplitPane top={<Top />} bottom={<Bottom />} />
      <ByeDialog />
    </PageHeaderWrapper>
  );
};
