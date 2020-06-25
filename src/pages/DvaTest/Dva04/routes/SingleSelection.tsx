import React from 'react';
import { connect } from 'umi';
import { Radio } from 'antd';
import Option from '../components/Option';
import Question from '../components/Question';
import { SingleSelectionProps } from '../data';
import styles from '../index.less';

const sign = ['A', 'B', 'C', 'D'];

// routes 名字与文件名一致
const SingleSelection: React.FC<SingleSelectionProps> = ({ singleSelection }) => {
  // 同样的定义，两种写法，保留供参考
  //  const Products: React.FC<ProductsProps> = (props) => {
  //  const { dispatch, products } = props;

  // 删除的原始版本
  // const handleDelete = (id: string) => {
  //   dispatch({
  //     // 此处 productsFull 是命名空间
  //     type: 'productsFull/delete',
  //     payload: id,
  //   });
  // };

  // 新的一秒后删除版本
  // const handleDelete = (id: string) => {
  //   dispatch({
  //     type: 'productsFull/delay1SecondDelete',
  //     payload: id,
  //   });
  // };

  // const handleAdd = () => {
  //   dispatch({
  //     type: 'productsFull/add',
  //   });
  // };

  // const handleSearch = (value: string) => {
  //   // console.log(value);
  //   dispatch({
  //     type: 'productsFull/query',
  //   });

  //   if (value !== '') {
  //     dispatch({
  //       type: 'productsFull/search',
  //       payload: value,
  //     });
  //   }
  // };

  // 利用React List的知识，将options数组重新组合，变成页面上的ABCD选项列表
  const OptionList = () => {
    const listItems = singleSelection.options.map((item, index) => (
      <Option
        className={styles.radioStyle}
        sign={sign[index]}
        optionContents={item}
        value={sign[index]}
      />
    ));
    return listItems;
  };

  return (
    <>
      <Question QuContent={singleSelection.quest} />
      {/* <Option sign="A" optionContents={singleSelection.options[0]} /> */}
      {/* <OrderList /> */}
      <Radio.Group>{OptionList()}</Radio.Group>
    </>
  );
};

// connect负责绑定State到view
export default connect(({ singleSelection }: SingleSelectionProps) => ({
  singleSelection,
}))(SingleSelection);
