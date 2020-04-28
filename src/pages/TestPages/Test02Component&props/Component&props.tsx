// React 组件（component）和 props 的自学页面
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import styles from './Component&props.less';

// 定义组件最简单的方式是定义成Javascript函数
// function Welcome(props) {
// 进行了typeScript改造
// 注意( )内的any申明了形参props 是什么，一般这里的期望实参肯定是个对象。所以用any
// 结尾的any声明了这个function会return什么内容，显然是个JSX，所以也是any, 这个any似乎不是强制需要的，省略的话eslint并未报错
function Welcome(props: any): any {
  // 注意： 组件名称必须以大写字母开头。小写字母开头的会被认为是原生组件，如<div>
  return <h1 className={styles.testStyle}>Hello, {props.name}</h1>;
}

// // ES6中可以写成Class的形式（似乎应用更广泛一些）
// class Welcome extends React.Component {
//   // render() 方法，是React Class必须实现的方法
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

/* ADP + ESLINT专属问题，只看React的可以跳过
 * 上面把组件写成Class的形式有个有意思的提示 Component should be written as a pure function eslint
 * 无状态的React组件必须写成纯函数，相关网页如下
 * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
 * 目前（2020/04/28）还不是非常理解无状态这个规定（页面里具体说明），暂做记录，未来补充。
 */

// 注意，此处发生了传值, 传递了类似如下信息，type应该是object，对应的TS定义就是  any
// props = {
//   name: "xxxx",
//   another: "ooooo"
// };
const element: any = <Welcome name="alex" another="another" />;

// 复合组件的列子
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

// 此处有一问，与Test01中相比，多了 React.ReactNode, 这就是TS要求的，给数据类型（一个React结点）
export default (): React.ReactNode => (
  // 此标签的作用是在页面首部提供一个面包屑页头
  <PageHeaderWrapper>
    {/* 以下两种形式均支持将Component渲染到页面 */}
    {element}
    <Welcome name="Miyo" />
    {/* 添加复合组件 */}
    <App />
  </PageHeaderWrapper>
);
