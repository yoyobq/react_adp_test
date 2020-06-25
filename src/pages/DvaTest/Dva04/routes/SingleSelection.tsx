import React from 'react';
import { connect } from 'umi';
import { Radio } from 'antd';
import Option from '../components/Option';
import Question from '../components/Question';
import { SingleSelectionProps } from '../data';

// routes 名字与文件名一致
const SingleSelection: React.FC<SingleSelectionProps> = ({ question }) => {
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

  return (
    <>
      <Question QuContent={question} />
      <Radio.Group>
        <Option optionName="a" optionContents="hahahahah" />
      </Radio.Group>
    </>
  );
};

// connect负责绑定State到view
export default connect(({ productsFull }: SingleSelectionProps) => ({
  productsFull,
}))(SingleSelection);
