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
    // 这个setup并不是内置的方法，只是变成人员自己取的一个标识而已。当然也可以去其他的名字
    // 两个参数 history其实是路由 history.listen 就可以监听路由，此处暂不涉及
    // setup({ history, dispatch }): void {
    // 目前的这个例子，就是不管时机，只要是访问当这张页面了，就立刻执行setup
    // 而setup干的活儿，就是去调用了 dispatch 里的query方法
    setup({ dispatch }): void {
      // 由于是在内部调用,就不需要写命名空间了
      dispatch({ type: 'query' });
    },
  },
};

export default Model;
