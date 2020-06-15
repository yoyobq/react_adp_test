import { Button, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { ProductFullStateType, ProductsListProps } from '../data';

const ProductList: React.FC<ProductsListProps> = ({ onDelete, productsFull }) => {
  // 请注意此处的ColumnsType，这个是antd-table 对columns的预定义
  const columns: ColumnsType<ProductFullStateType> = [
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
  return <Table dataSource={productsFull} columns={columns} />;
};

export default ProductList;
