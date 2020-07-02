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
    isCorrect: undefined,
    orderedTag: ['A', 'B', 'C', 'D', 'E', 'F'],
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
    },

    getTestData() {
      // 假设从外部获取了以下信息，
      // 需要特别注意的是，这里模拟的数据和数据库里存的数据有差别
      // 同样假设是后台处理了数据，格式化成了规定形式，然后发给前台
      const dataSource = {
        quest: '下面关于微处理器的叙述中，不正确的是（）。',
        // 后台应该传来的是已经按 orderedTag 顺序打乱的数组
        options: [
          'Intel/AMD公司是国际上研制、生产微处理器最有名的公司',
          '微处理器通常以单片集成电路制成',
          'Pentium4是目前PC机中使用最广泛的一种微处理器',
          '它具有运算和控制功能，但不具备数据存储功能',
        ],
        // 请无视此答案是否合理
        realAnswer: 'A',
        // 打乱后的A,B,C,D顺序
        orderedTag: ['C', 'A', 'D', 'B'],
      };

      // 模拟将后台数据根据要求二次封装（添加了一个currentAnswer属性）
      const initState: SingleSelectionState = dataSource;
      initState.currentAnswer = '';
      // initState.isCorrect = false;
      return initState;
    },
  },

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
