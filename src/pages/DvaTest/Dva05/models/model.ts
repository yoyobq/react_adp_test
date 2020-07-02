import { SingleSelectionModel, SingleSelectionState } from '../data';
import { getFakeData } from '../services/singleSelection';

const Model: SingleSelectionModel = {
  namespace: 'singleSelection2',
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

    // getTestData() {
    //   // 假设从外部获取了以下信息，
    //   // 需要特别注意的是，这里模拟的数据和数据库里存的数据有差别
    //   // 同样假设是后台处理了数据，格式化成了规定形式，然后发给前台
    //   const dataSource = {
    //     quest: '若有命令 useradd -u 510 -g 500 -d /home/user1 -s /bin/bash -p 123456 -f -1 user1 则下列描述不正确的是（）',
    //     // 后台应该传来的是已经按 orderedTag 顺序打乱的数组
    //     options: [
    //       '用户的密码永不过期',
    //       '用户的家目录为 /home/user1',
    //       '用户下次登录无须修改口令',
    //       '新建了一个名为user1的用户',
    //     ],
    //     // 请无视此答案是否合理
    //     realAnswer: 'D',
    //     // 打乱后的A,B,C,D顺序
    //     orderedTag: ['C', 'B', 'D', 'A'],
    //   };

    //   return dataSource;
    // },

    setData(_, { payload: value }) {
      return value;
    },
  },

  effects: {
    *fetchData(_, { put, call }) {
      const stateData = yield call(getFakeData);
      // 这里有个理解错误，原本以为无论是effects还是reducer，return 的内容都会改变state，
      // 实际做来发现只有reducer才有这个效果，所以这里用put调用一个reducer，用来改变state
      // return stateData,
      yield put({
        type: 'setData',
        payload: stateData,
      });
    },
  },

  // 订阅
  subscriptions: {
    // 初始化题目数据数据
    init({ dispatch }): void {
      dispatch({
        type: 'fetchData',
      });
    },
  },
};

export default Model;
