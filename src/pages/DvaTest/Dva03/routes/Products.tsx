import { Button } from 'antd';
import React from 'react';
import { connect } from 'umi';
import ProductsList from '../components/ProductsList';
import { ProductsProps } from '../data';

const Products: React.FC<ProductsProps> = ({ dispatch, products }) => {
  // 同样的定义，两种写法，保留供参考
  //  const Products: React.FC<ProductsProps> = (props) => {
  //  const { dispatch, products } = props;

  const handleDelete = (id: string) => {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  };

  const handleAdd = () => {
    dispatch({
      type: 'products/add',
    });
  };

  return (
    <div>
      <h2>List of Products</h2>
      <Button onClick={handleAdd}>Add</Button>
      <ProductsList onDelete={handleDelete} products={products} />
    </div>
  );
};

// connect负责绑定State到view
export default connect(({ products }: ProductsProps) => ({
  products,
}))(Products);
