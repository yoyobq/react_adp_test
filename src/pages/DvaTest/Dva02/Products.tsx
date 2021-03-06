/* eslint-disable @typescript-eslint/no-use-before-define */
import { Button, Popconfirm, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import type { ProductStateType } from './model/model';
// 请注意model已被自动加载，且namespace是 'products'

interface ProductsProps {
  dispatch: Dispatch;
  products: ProductStateType[];
}

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
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// ProductsListProps的定义
interface ProductsListProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onDelete: Function;
  products: ProductStateType[];
}

const ProductList: React.FC<ProductsListProps> = ({ onDelete, products }) => {
  // 请注意此处的ColumnsType，这个是antd-table 对columns的预定义
  const columns: ColumnsType<ProductStateType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      // 在列中嵌套其他组件的方法
      // text 当前的行，record 当前行的数据，index 行索引
      // render: (text, record, index) => {
      // 此处下划线表示，此变量根本用不到，不想起名字了，同时还省略了index
      render: (_, record) => {
        return (
          <Popconfirm title={`Delete?${record.id}`} onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

// connect负责绑定State到view
export default connect(({ products }: ProductsProps) => ({
  products,
}))(Products);
