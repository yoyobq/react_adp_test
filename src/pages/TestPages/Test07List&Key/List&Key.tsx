/* eslint-disable react/no-array-index-key */
// 一个真正的BlankPage
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import React from 'react';
// import styles from './List&Key.less';

const arr = [1, 2, 'c', 4, 'e'];
// 定义返回值类型是由 JSX的Element 组成的数组
function List(): JSX.Element[] {
  // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
  // list 需要有key这个属性来作为标识，这个标识只在react中可见，如果不指定key，会在console中报错
  // 此处并不推荐用index为key复制，回警告：Do not use Array index in keys
  // 理由是array的增删改插入等操作容易引起index的混乱，建议用代码中设计的id为key赋值，
  // [{id:1, name:'alex'},{id:2, name:'tom'}] 此例中的id即为一个好的 key 选择
  const listItems = arr.map((item, index) => <li key={index}>{`${index} - ${item}`}</li>);

  // 如果直接返回ListItems的话，会出一个很有意思的错误
  // 渲染时候<List /> 会报告:
  // Type 'Element[]' is missing the following properties from type 'Element': type, props, keyts(2605)
  // 原因是期待的是一个JSX对象，而不是现在这样的子元素列表（数组）
  // 其实就是 <li>xxx</li><li>ooo</li>显然不完整
  // 当然有个简单的办法，就是套个<ol>的外壳返回JSX，但我想作作妖，于是请看OrderList部分
  return listItems;
}

// 请看下一段的激进升级版本
// function OrderList(): JSX.Element {
//   return (
//     <ol>{List()}</ol>
//   );
// };

// 定义返回内容是个JSX元素
const OrderList: React.FC<{}> = () => {
  return (
    // ADP中有个全局设定 list-sytle：none，所以看不到默认的1，2，3，4
    <ol>{List()}</ol>
  );
};

// 用class方法实现同样的list，并提供可替换属性list
// 请注意，这里使用了自定义属性list，处理方式和之前的例子不同
// 之前是对JSX的定义进行操作，现在是用自定义接口对当前的class进行限制
// 显然是这里的方法更好，以后都会使用这样的方式
interface Props {
  list: any[];
}

// 这种尖括号的写法<>，在typeScript在指定“泛型”
// 具体可参考https://ts.xcatliu.com/advanced/generics
class UnOrderList extends React.Component<Props, {}> {
  state = {
    arrList: [],
  };

  constructor(props: any) {
    super(props);
    this.state.arrList = props.list.map((item: any, index: number) => (
      // list 需要有key这个属性来作为标识，这个标识只在react中可见
      // 若想在html中使用key属性，需要定义其他属性名，这里就用了id
      <li key={index} id={index.toString()}>{`${index} - ${item}`}</li>
    ));
  }

  render() {
    return <ul>{this.state.arrList}</ul>;
  }
}

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <OrderList />
    <UnOrderList list={arr} />
  </PageHeaderWrapper>
);
