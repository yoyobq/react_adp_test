import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';

// 本例来自对 https://zh-hans.reactjs.org/docs/state-and-lifecycle.html 内容的改造

// （1）先来一个Tick（每一跳) 组件
function Tick() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

// （1）要求定时更新每一跳，做了一个尝试
const element = setInterval(Tick, 1000);

// 此处有一问，与Test01中相比，多了 React.ReactNode, 这就是TS要求的，给数据类型（一个React结点）
export default (): React.ReactNode => (
  // 此标签的作用是在页面首部提供一个面包屑页头
  <PageHeaderWrapper>
    {/* （1）这里就出问题了，定时更新的只是Tick，没有重新渲染，我尝试了下，水平不够，没法定时重新渲染 */}
    {element}
  </PageHeaderWrapper>
);
