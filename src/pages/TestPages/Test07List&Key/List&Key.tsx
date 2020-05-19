// 一个真正的BlankPage
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
// import styles from './List&Key.less';

// 定义返回值类型是由 JSX的Element 组成的数组
function List(): Array<JSX.Element> {
  const numbers = [1, 2, 'c', 4, 'e'];

  // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
  const listItems = numbers.map((number, index) => <li>{`${index} - ${number}`}</li>);

  // 如果直接返回ListItems的话，会出一个很有意思的错误
  // 渲染时候<List /> 会报告:
  // Type 'Element[]' is missing the following properties from type 'Element': type, props, keyts(2605)
  // 原因是期待的是一个JSX对象，而不是现在这样的子元素列表（数组）
  // 其实就是 <li>xxx</li><li>ooo</li>显然不完整
  // 当然有个简单的办法，就是套个<ol>的外壳返回JSX，可是我偏不,我就是想作妖，于是请看OrderList部分
  return listItems;
}

// 定义返回内容是个JSX元素
function OrderList(): JSX.Element {
  return (
    // ADP中有个全局设定 list-sytle：none，所以看不到默认的1，2，3，4
    <ol>{List()}</ol>
  );
}

// class Hello extends React.Component {
//   state = {
//     data: null,
//   };

//   constructor(props: any) {
//     super(props);
//     this.state.data = props['data-data'];
//   }

//   render() {
//     return <div className={styles['test-Style']}>{this.state.data}</div>;
//   }
// }
export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <OrderList />
  </PageHeaderWrapper>
);
