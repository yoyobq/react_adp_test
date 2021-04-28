import React from 'react';
import { connect } from 'umi';
import OptionList from '../components/OptionList';
import Question from '../components/Question';
import ResultBoard from '../components/ResultBoard';
import type { SingleSelectionProps } from '../data';

// routes 名字与文件名一致
const SingleSelection2: React.FC<SingleSelectionProps> = ({ dispatch, singleSelection2 }) => {
  const onAnswerChange = (value: string) => {
    dispatch({
      type: 'singleSelection2/setCurrentAnswer',
      payload: value,
    });
  };

  // 由于选项顺序已经打乱，
  // sigleSelection.currentAnswer / realAnswer 里存的都是数据库里的A,B,C，D
  // 对应的 value 也是数据库里真实的 A,B,C,D...，与页面上显示的其实不一致
  // 所以需要转换
  const selectTag = () => {
    const answer = singleSelection2.currentAnswer;
    if (answer === '' || answer === undefined) {
      return '';
    }
    const index = singleSelection2.orderedTag!.indexOf(answer);
    return String.fromCharCode(65 + index);
  };

  return (
    <>
      <Question quContent={singleSelection2.quest} selectTag={selectTag()} />
      <ResultBoard isCorrect={singleSelection2.isCorrect} />
      <div>
        <OptionList
          optList={singleSelection2.options}
          currentAnswer={singleSelection2.currentAnswer}
          onChange={onAnswerChange}
          // ! 表示运行到此时，orderedTag 一定有值，不会是 undifined
          orderedTag={singleSelection2.orderedTag!}
        />
      </div>
    </>
  );
};

// connect负责绑定State到view
export default connect(({ singleSelection2 }: SingleSelectionProps) => ({
  singleSelection2,
}))(SingleSelection2);
