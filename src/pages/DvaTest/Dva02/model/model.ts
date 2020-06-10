import { Reducer } from 'umi';

// 定义ProductsState的类型
export interface ProductsStateType {
    id: string;
    name: string;
};

// 定义此Model的类型
export interface ProductsModelType {
  // 命名空间是string
  namespace: string;
  // state是个ProductsStateType组成的数组
  state: Array<ProductsStateType>;
  // reducers描述发生了什么事
  reducers: {
    delete: Reducer<Array<ProductsStateType>>;
    // add: Reducer<Array<ProductsStateType>>;
  }
}

const Model: ProductsModelType = {
  namespace: 'products',
  // 此处的state数据是直接赋值了，
  // 以后应该是通过service从后台获取
  state: [
    { name: 'dva', id: 'dva' },
    { name: 'antd', id: 'antd' },
    { name: 'react', id: 'react' },
  ],
  reducers: {
    delete(state, { payload: id }) {
      // state可能是undfiened，所以要!
      // 返回所有和id不符的数据
      return state!.filter(item => item.id !== id);
    }
    // add(state, { payload }) {
    //   return state?.push({name: 'addtest', id: 'addtest'});
    // }
  },
};

export default Model;