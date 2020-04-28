/* eslint-disable jsx-a11y/label-has-associated-control */

// 这条eslint规则已弃用，估计ADP仍有历史残留代码，故需要保留
/* eslint-disable jsx-a11y/label-has-for */
// 自主试验，做一个单选题的组合Component
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
// import styles from './ChoiceComponent.less';

// 模拟从数据库取得数据，造一个包含了题号，题目，题图（可能有）ABCD选项，答案等内容的选择题
// 并用JSON对象描述

const question: any = {
  id: 1,
  quest: '下面关于微处理器的叙述中，不正确的是_______。',
  optA: '微处理器通常以单片集成电路制成',
  optB: '它具有运算和控制功能，但不具备数据存储功能',
  optC: 'Intel/AMD公司是国际上研制、生产微处理器最有名的公司',
  optD: 'Pentium4是目前PC机中使用最广泛的一种微处理器',
  // 请无视此答案是否合理
  answer: 'A',
};
// 测试JSON对象是否合法
// const QuestStr: any = JSON.stringify(Question);
// 第一步，先做一个传统的单选题组件
function Choice(): any {
  // 注意： 组件名称必须以大写字母开头。小写字母开头的会被认为是原生组件，如<div>
  return (
    // 返回的必须是一个根
    <div>
      <h1>
        {question.id}.{question.quest}
      </h1>
      <form action="/test01">
        <label>
          <input type="radio" value="A" name={`quest${question.id}`} />
          {question.optA}
        </label>
        <br />
        <label>
          <input type="radio" value="B" name={`quest${question.id}`} />
          {question.optB}
        </label>
        <br />
        <label>
          <input type="radio" value="C" name={`quest${question.id}`} />
          {question.optC}
        </label>
        <br />
        <label>
          <input type="radio" value="D" name={`quest${question.id}`} />
          {question.optD}
        </label>
        <br />
      </form>
    </div>
  );
}

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Choice />
  </PageHeaderWrapper>
);
