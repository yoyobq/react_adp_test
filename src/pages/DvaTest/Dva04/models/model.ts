import { SingleSelectionModel } from '../data';

const Model: SingleSelectionModel = {
  namespace: 'singleSelection',
  // 此处的state数据是直接赋值了，
  // 以后应该是通过service从后台获取
  state: {
    quest: '下面关于微处理器的叙述中，不正确的是_______。',
    opt1: '微处理器通常以单片集成电路制成',
    opt2: '它具有运算和控制功能，但不具备数据存储功能',
    opt3: 'Intel/AMD公司是国际上研制、生产微处理器最有名的公司',
    opt4: 'Pentium4是目前PC机中使用最广泛的一种微处理器',
    // 请无视此答案是否合理
    answer: 'A',
  },

  // reducers: {
  //   delete(state, { payload: id }) {
  //     // state可能是undfiened，所以要!
  //     // 返回所有和id不符的数据
  //     return state!.filter((item) => item.id !== id);
  //   },
  //   add: (state) => {
  //     // 此处有坑，浪费了不少时间， .push返回值是新数组长度，而不是新数组
  //     state!.push({ name: 'addtest', id: 'addtest' });
  //     const newState = [...state!];
  //     // 此处也有大坑，state参数是引用类型，如果直接返回state，dva会认为没有修改state，所有不会刷新（同redux）
  //     // return state;
  //     return newState;
  //   },
  //   search: (state, { payload: value }) => {
  //     // const id = 'dva1';
  //     // const newS =  state!.filter((item) => item.id !== id);
  //     return state!.filter((item) => item.name === value);
  //     // return newS;
  //   },
  //   query() {
  //     // 这里的定义，包括类型定义其实是多此一举的，仅用于假设从外部获取了以下信息
  //     const dataSource: Array<SingleSelectionStateType> = [
  //       { name: 'dva4', id: 'dva1' },
  //       { name: 'antd', id: 'antd2' },
  //       { name: 'react', id: 'react3' },
  //       { name: 'hahaha', id: 'pro4' },
  //     ];

  //     return dataSource;
  //   },
  // },
  // effects: {
  //   *delay1SecondDelete({ payload: id }, { put, call }) {
  //     // 注意这个delay，其实就是用的setTimeout，但不能直接yield setTimeout，
  //     // 因为 setTimeout是一个普通函数，并不支持异步操作，
  //     // 所以先要把 setTimeout 封装到 Promise 对象内部才可能 yield
  //     const delay = (ms: number) =>
  //       new Promise((resolve) => {
  //         setTimeout(resolve, ms);
  //       });

  //     // call 用于执行 “异步函数“，啰嗦一句，防止被坑，
  //     // 也就是说不支持普通函数的调用，普通函数一定要如本例一样事先封装
  //     yield call(delay, 1000);

  //     // put 执行一个action
  //     yield put({
  //       type: 'delete',
  //       payload: id,
  //     });
  //   },
  // },

  // // 订阅，可用来响应各种情况
  // subscriptions: {
  //   // 这个setup并不是内置的方法，只是变成人员自己取的一个标识而已。当然也可以去其他的名字
  //   // 两个参数 history其实是路由 history.listen 就可以监听路由，此处暂不涉及
  //   // setup({ history, dispatch }): void {
  //   // 目前的这个例子，就是不管时机，只要是访问当这张页面了，就立刻执行setup
  //   // 而setup干的活儿，就是去调用了 reducer 里的query方法
  //   setup({ dispatch }): void {
  //     // 由于是在内部调用,就不需要写命名空间了
  //     dispatch({
  //       type: 'query',
  //     });
  //   },
  // },
};

export default Model;
