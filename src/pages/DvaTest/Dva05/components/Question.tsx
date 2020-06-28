import React from 'react';
import styles from '../index.less';

interface quProps {
  quContent: string;
  selectTag?: string;
}

const Question: React.FC<quProps> = ({ quContent, selectTag }) => {
  // 解决把用户答案写到括号里问题的临时办法
  // 答案为空时，占一个空格
  const formatedAnswer = selectTag === '' ? ' ' : selectTag;
  // 用户提交答案后，把空格替换成字符
  const reg = /（/g;
  const finalContent = quContent.replace(reg, `（${formatedAnswer}`);

  return <div className={styles[`qu-content`]}>{finalContent}</div>;
};

export default Question;
