import { Effect, Reducer, Subscription } from 'umi';

export interface SingleSelectionState {
  // 题目描述
  quest: string;
  options: Array<string>;
  // 数据库中保存的正确答案
  realAnswer: string;
  // 用户目前选择的答案
  currentAnswer?: string;
  // 是否做对了
  isCorrect?: boolean;
  orderedTag?: Array<string>;
}

export interface SingleSelectionProps {
  dispatch?: Dispatch;
  onChange?: Function;
  singleSelection2: SingleSelectionState;
}

// 定义此Model的类型
export interface SingleSelectionModel {
  namespace: string;
  state?: SingleSelectionState | {};

  reducers: {
    setCurrentAnswer: Reducer<SingleSelectionStateType>;
    // getTestData: Reducer<SingleSelectionState>;
    setData: Reducer<SingleSelectionState>;
  };

  // effects用于处理异步逻辑
  effects: {
    fetchData: Effect;
  };

  // subscriptions 用于获取数据源
  subscriptions: {
    init: Subscription;
  };
}
