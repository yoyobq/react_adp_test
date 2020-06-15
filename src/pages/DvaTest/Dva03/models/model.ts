import { ProductsFullModelType } from '../data';

const Model: ProductsFullModelType = {
  namespace: 'productsFull',
  // 此处的state数据是直接赋值了，
  // 以后应该是通过service从后台获取
  state: [
    { name: 'dva4', id: 'dva1' },
    { name: 'antd', id: 'antd2' },
  ],

  dataSource: [
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
    search(state, { payload: value }) {
      // const id = 'dva1';
      // const newS =  state!.filter((item) => item.id !== id);
      return state!.filter((item) => item.name === value);
      // return newS;
    },
  },
};

export default Model;
