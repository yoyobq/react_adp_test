import React from 'react';
import { connect } from 'umi';
import OptionList from '../components/OptionList';
import Question from '../components/Question';
import { SingleSelectionProps } from '../data';
import ResultBoard from '../components/ResultBoard';

// routes 名字与文件名一致
const SingleSelection: React.FC<SingleSelectionProps> = ({ dispatch, singleSelection }) => {
  const onAnswerChange = (value: string) => {
    dispatch({
      type: 'singleSelection/setCurrentAnswer',
      payload: value,
    });
  };

  return (
    <>
      <Question quContent={singleSelection.quest} currentAnswer={singleSelection.currentAnswer} />
      <ResultBoard isCorrect={singleSelection.isCorrect} />
      <div>
        <OptionList
          optList={singleSelection.options}
          currentAnswer={singleSelection.currentAnswer}
          onChange={onAnswerChange}
        />
      </div>
    </>
  );
};

// connect负责绑定State到view
export default connect(({ singleSelection }: SingleSelectionProps) => ({
  singleSelection,
}))(SingleSelection);
