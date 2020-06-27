import React from 'react';
import { connect } from 'umi';
import OptionList from '../components/OptionList';
import Question from '../components/Question';
import ResultBoard from '../components/ResultBoard';
import { SingleSelectionProps } from '../data';

// routes 名字与文件名一致
const SingleSelection: React.FC<SingleSelectionProps> = ({ dispatch, singleSelection }) => {
  const onAnswerChange = (value: string) => {
    dispatch({
      type: 'singleSelection/setCurrentAnswer',
      payload: value,
    });
  };

  // 由于选项顺序已经打乱，
  // sigleSelection.currentAnswer / realAnswer 里存的都是数据库里的A,B,C，D
  // 对应的 value 也是数据库里真实的 A,B,C,D...，与页面上显示的其实不一致
  // 所以需要转换
  const selectTag = () => {
    const answer = singleSelection.currentAnswer;
    if (answer === '' || answer === undefined) {
      return '';
    }
    const index = singleSelection.orderedTag!.indexOf(answer);
    return String.fromCharCode(65 + index);
  };

  return (
    <>
      <Question quContent={singleSelection.quest} selectTag={selectTag()} />
      <ResultBoard isCorrect={singleSelection.isCorrect} />
      <div>
        <OptionList
          optList={singleSelection.options}
          currentAnswer={singleSelection.currentAnswer}
          onChange={onAnswerChange}
          // ! 表示运行到此时，orderedTag 一定有值，不会是 undifined
          orderedTag={singleSelection.orderedTag!}
        />
      </div>
    </>
  );
};

// connect负责绑定State到view
export default connect(({ singleSelection }: SingleSelectionProps) => ({
  singleSelection,
}))(SingleSelection);
