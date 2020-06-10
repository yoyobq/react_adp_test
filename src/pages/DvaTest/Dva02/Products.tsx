import { Button, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { connect, Dispatch } from 'umi';
import { ProductStateType } from './model/model';

interface ProductsProps {
  dispatch: Dispatch;
  products: Array<ProductStateType>;
}

const Products: React.FC<ProductsProps> = ({ dispatch, products }) => {
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

// ProductsListProps的定义
interface ProductsListProps {
  onDelete: Function;
  products: Array<ProductStateType>;
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

export default connect(({ products }: ProductsProps) => ({
  products,
}))(Products);
