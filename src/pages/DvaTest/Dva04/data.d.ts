// import { Subscription, Reducer, Effect } from 'umi';
import { Subscription, Reducer } from 'umi';

// 定义ProductsState的类型
export interface SingleSelectionState {
  quest: string;
  options: Array<string>;
  realAnswer: string;
  currentAnswer?: string;
  isCorrect?: boolean;
}

export interface SingleSelectionProps {
  dispatch?: Dispatch;
  onChange?: Function;
  singleSelection: SingleSelectionState;
}

// 定义此Model的类型
export interface SingleSelectionModel {
  namespace: string;
  state?: SingleSelectionState | {};

  reducers: {
    //  delete: Reducer<Array<SingleSelectionStateType>>;
    //  add: Reducer<Array<SingleSelectionStateType>>;
    setCurrentAnswer: Reducer<SingleSelectionStateType>;
    getTestData: Reducer<SingleSelectionState>;
  };

  // // effects用于处理异步逻辑
  // effects: {
  //   // fetchData: Effect;
  //   delay1SecondDelete: Effect;
  // };

  // subscriptions 用于获取数据源
  subscriptions: {
    init: Subscription;
  };
}
