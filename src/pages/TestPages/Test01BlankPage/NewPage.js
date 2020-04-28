// 必须引用React
import React from 'react';
import styles from './NewPage.less';

// 这是一个简单的ADP页面
// 主要参考了 https://pro.ant.design/docs/new-page-cn 描述完成
// 请注意，这个页面并不是TS页面，而是JS页面，和其他页面不同
const name = 'Alex';
const element = (
  // 双引号，就是字符串
  <div id="root">
    {/* 大括号{} 就是js表达式 */}
    <h1>hello, {name}</h1>
    <div className={styles.testStyle}>Test01 New Blank Page</div>
  </div>
);

export default () => {
  // return <div className={styles.testStyle}>Test01 New Blank Page</div>
  return element;
};

// 上述页面没有讨论路由的添加方式在此一并记录
// 注意这是从ADP框架反推来学习的，
// 路有文件位置 /config/config.ts
// {
//   path: '/test01',
//   name: 'Test01BlankPage',
//   icon: 'rocket',
//   component: './TestPages/Test01BlankPage/NewPage',
// },

// path 是指地址栏中的页面名称  本例即为 127.0.0.1:8000/test01
// name 是这个页面的名字，会在主页里被侧边栏引用
// icon 是侧边栏里页面名字前的小图标，可通过 https://ant.design/components/icon-cn/ 查找图表及对应名称，经测试大小写不敏感
// component 页面实际的位置，不需要后缀

// 最后一题同名的.less样式，似乎没法为本页面默认加载CSS样式（基于200417的理解）
// 根据 welcome.less 和 welcom.tsx 页面中的css引用形式修改了代码，成功引入了css样式

// 提供一个非ADP框架下的例子
// 该行需在 import styles 前
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   // 要注意element中定义的 id='root'
//   element,
//   element,
//   document.getElementById('root')
// );
