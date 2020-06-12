import { Reducer } from 'umi';
// ProductsListProps的定义
export interface ProductsListProps {
  onDelete: Function;
  products: Array<ProductFullStateType>;
}

// 定义ProductsState的类型
export interface ProductFullStateType {
  id: string;
  name: string;
}

export interface ProductsProps {
  dispatch: Dispatch;
  products: Array<ProductFullStateType>;
}

// 定义此Model的类型
export interface ProductsFullModelType {
  // 命名空间是string
  namespace: string;
  // state是个ProductFullStateType组成的数组
  state: Array<ProductFullStateType>;
  // reducers描述发生了什么事, 用于同步更新state
  reducers: {
    delete: Reducer<Array<ProductFullStateType>>;
    add: Reducer<Array<ProductFullStateType>>;
  };

  // effects用于处理异步逻辑
  // effects: {
  // }

  // subscriptions 用于获取数据源
  // subscriptions: {
  // };
}
