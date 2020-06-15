import { Button } from 'antd';
import React from 'react';
import { connect } from 'umi';
import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import { ProductsFullProps } from '../data';

const ProductsFull2: React.FC<ProductsFullProps> = ({ dispatch, productsFull }) => {
  // 同样的定义，两种写法，保留供参考
  //  const Products: React.FC<ProductsProps> = (props) => {
  //  const { dispatch, products } = props;

  const handleDelete = (id: string) => {
    dispatch({
      type: 'productsFull/delete',
      payload: id,
    });
  };

  const handleAdd = () => {
    dispatch({
      type: 'productsFull/add',
    });
  };

  const handleSearch = (value: string) => {
    // console.log(value);
    dispatch({
      type: 'productsFull/search',
      payload: value,
    });
  };

  return (
    <div>
      <h2>List of Products</h2>
      <Button onClick={handleAdd}>Add</Button>
      <SearchBar onSearch={handleSearch} />
      <ProductsList onDelete={handleDelete} productsFull={productsFull} />
    </div>
  );
};

// connect负责绑定State到view
export default connect(({ productsFull }: ProductsFullProps) => ({
  productsFull,
}))(ProductsFull2);