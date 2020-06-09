import React from 'react';
import { Dispatch, connect } from 'umi';
import { Table, Popconfirm, Button } from 'antd';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import ProductList from '@/components/ProductList';
// import React, { useState, useEffect } from 'react';
// import styles from './index.less';

interface ProductsProps  {
  dispatch: Dispatch,
  products: any,
};

// const Products = ({ dispatch, producsts }) => {
const Products: React.FC<ProductsProps> = (props) => {
  const { dispatch, products } = props;

  function handleDelete(id: string) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default connect(({ products }) => ({
  products,
}))(Products);
// export default (): React.ReactNode => (
//   <PageHeaderWrapper className={styles.main}>
//     <ProductList />
//   </PageHeaderWrapper>
// );
