import { ProductsFullModelType, ProductFullStateType } from '../data';

const Model: ProductsFullModelType = {
  namespace: 'productsFull',
  // 此处的state数据是直接赋值了，
  // 以后应该是通过service从后台获取
  state: [],

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
    search(state, { payload: value }) {
      // const id = 'dva1';
      // const newS =  state!.filter((item) => item.id !== id);
      return state!.filter((item) => item.name === value);
      // return newS;
    },
    query() {
      // 这里的定义，包括类型定义其实是多此一举的，仅用于假设从外部获取了以下信息
      const dataSource: Array<ProductFullStateType> = [
        { name: 'dva4', id: 'dva1' },
        { name: 'antd', id: 'antd2' },
        { name: 'react', id: 'react3' },
        { name: 'hahaha', id: 'pro4' },
      ];

      return dataSource;
    },
  },
  subscriptions: {
    // setup({ history, dispatch }): void {
    setup({ dispatch }): void {
      // console.log(history);
      dispatch({ type: 'query' });
    },
  },
};

export default Model;
