import { Subscription, Reducer, Effect } from 'umi';

// ProductsListProps的定义
export interface ProductsListProps {
  onDelete: Function;
  productsFull: Array<ProductFullStateType>;
}

// 定义ProductsState的类型
export interface ProductFullStateType {
  id: string;
  name: string;
}

export interface ProductsFullProps {
  dispatch: Dispatch;
  productsFull: Array<ProductFullStateType>;
}

// 定义此Model的类型
export interface ProductsFullModelType {
  // 命名空间是string
  namespace: string;
  // state是个ProductFullStateType组成的数组
  state: Array<ProductFullStateType>;
  // dataSource: Array<ProductFullStateType>;
  // reducers描述发生了什么事, 用于同步更新state
  reducers: {
    delete: Reducer<Array<ProductFullStateType>>;
    add: Reducer<Array<ProductFullStateType>>;
    search: Reducer<Array<ProductFullStateType>>;
    query: Reducer<Array<ProductFullStateType>>;
  };

  // effects用于处理异步逻辑
  effects: {
    // fetchData: Effect;
    delay1SecondDelete: Effect;
  };

  // subscriptions 用于获取数据源
  subscriptions: {
    setup: Subscription;
  };
}

export interface SearchBarProps {
  // onSearch 是 antd <Search> 定义的
  onSearch: (
    value: string,
    event?:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
      | undefined,
  ) => void;
  // onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  // products: Array<ProductFullStateType>;
}
