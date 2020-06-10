import { Button, Popconfirm, Table } from 'antd';
import React from 'react';
import { connect, Dispatch } from 'umi';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import ProductList from '@/components/ProductList';
// import React, { useState, useEffect } from 'react';
// import styles from './index.less';
// import products from './model/model';
import { ProductsStateType } from './model/model';

interface ProductsProps  {
  dispatch: Dispatch,
  products: ProductsStateType,
};

const Products: React.FC<ProductsProps> = ({dispatch, products}) => {
// 同样的定义，两种写法，保留供参考
//  const Products: React.FC<ProductsProps> = (props) => {
//  const { dispatch, products } = props;

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

interface ProductsListProps  {
  onDelete: Function,
  products: any,
};

const ProductList : React.FC<ProductsListProps>= ({ onDelete, products }) => {
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

export default connect(({ products } : ProductsProps ) => ({
  products,
}))(Products);
// export default (): React.ReactNode => (
//   <PageHeaderWrapper className={styles.main}>
//     <ProductList />
//   </PageHeaderWrapper>
// );
