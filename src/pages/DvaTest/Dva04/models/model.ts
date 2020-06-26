import { SingleSelectionModel, SingleSelectionState } from '../data';

const Model: SingleSelectionModel = {
  namespace: 'singleSelection',
  // 此处的state数据是直接赋值了，
  // 以后应该是通过service从后台获取
  state: {
    quest: '',
    options: [],
    realAnswer: '',
    currentAnswer: '',
    isCorrect: false,
  },

  reducers: {
    setCurrentAnswer(state: SingleSelectionState, { payload: value }) {
      const newState: SingleSelectionState = { ...state! };
      newState.currentAnswer = value;
      if (value === newState.realAnswer) {
        newState.isCorrect = true;
      } else {
        newState.isCorrect = false;
      }
      return newState;
      // const newState = [...state!];
      // newState!.currentAnswer = value;
      // return newState
    },
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
    getTestData() {
      // 假设从外部获取了以下信息，
      // 需要特别注意的是，这里模拟的数据和数据库里存的数据有差别
      // 同样假设是后台处理了数据，格式化成了规定形式，然后发给前台
      const dataSource = {
        quest: '下面关于微处理器的叙述中，不正确的是（）。',
        options: [
          '微处理器通常以单片集成电路制成',
          '它具有运算和控制功能，但不具备数据存储功能',
          'Intel/AMD公司是国际上研制、生产微处理器最有名的公司',
          'Pentium4是目前PC机中使用最广泛的一种微处理器',
        ],
        // 请无视此答案是否合理
        realAnswer: 'A',
      };

      // 模拟将后台数据根据要求二次封装（添加了一个currentAnswer属性）
      const initState: SingleSelectionState = dataSource;
      initState.currentAnswer = '';
      initState.isCorrect = false;
      return initState;
    },
  },
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

  // 订阅
  subscriptions: {
    // 初始化题目数据数据
    init({ dispatch }): void {
      dispatch({
        type: 'getTestData',
      });
    },
  },
};

export default Model;
