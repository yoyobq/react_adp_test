import type { Reducer } from 'umi';

// 定义ProductsState的类型
export interface ProductStateType {
  id: string;
  name: string;
}

// 定义此Model的类型
export interface ProductsModelType {
  // 命名空间是string
  namespace: string;
  // state是个ProductStateType组成的数组
  state: ProductStateType[];
  // reducers描述发生了什么事, 用于同步更新state
  reducers: {
    delete: Reducer<ProductStateType[]>;
    add: Reducer<ProductStateType[]>;
  };

  // effects用于处理异步逻辑
  // effects: {
  // }

  // subscriptions 用于获取数据源
  // subscriptions: {
  // };
}

const Model: ProductsModelType = {
  namespace: 'products',
  // 此处的state数据是直接赋值了，
  // 以后应该是通过service从后台获取
  state: [
    { name: 'dva4', id: 'dva1' },
    { name: 'antd', id: 'antd2' },
    { name: 'react', id: 'react3' },
  ],
  reducers: {
    delete(state, { payload: id }) {
      // state可能是undfiened，所以要!
      // 返回所有和id不符的数据
      return state!.filter((item) => item.id !== id);
    },
    add(state) {
      // 此处有坑，浪费了不少时间， .push返回值是新数组长度，而不是新数组
      state!.push({ name: 'addtest', id: 'addtest' });
      const newState = [...state!];
      // 此处也有大坑，state参数是引用类型，如果直接返回state，dva会认为没有修改state，所有不会刷新（同redux）
      // return state;
      return newState;
    },
  },
};

export default Model;
