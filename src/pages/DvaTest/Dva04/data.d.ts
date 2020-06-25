// import { Subscription, Reducer, Effect } from 'umi';

// 定义ProductsState的类型
export interface SingleSelectionState {
  quest: string;
  opt1?: string;
  opt2?: string;
  opt3?: string;
  opt4?: string;
  opt5?: string;
  answer: string;
}

export interface SingleSelectionProps {
  dispatch?: Dispatch;
  question?: string;
}

// 定义此Model的类型
export interface SingleSelectionModel {
  namespace: string;
  state: SingleSelectionState;

  // reducers: {
  //   delete: Reducer<Array<SingleSelectionStateType>>;
  //   add: Reducer<Array<SingleSelectionStateType>>;
  //   search: Reducer<Array<SingleSelectionStateType>>;
  //   query: Reducer<Array<SingleSelectionStateType>>;
  // };

  // // effects用于处理异步逻辑
  // effects: {
  //   // fetchData: Effect;
  //   delay1SecondDelete: Effect;
  // };

  // // subscriptions 用于获取数据源
  // subscriptions: {
  //   setup: Subscription;
  // };
}
