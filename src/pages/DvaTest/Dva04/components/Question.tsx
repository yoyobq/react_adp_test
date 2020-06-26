import React from 'react';
import styles from '../index.less';

interface quProps {
  quContent: string;
  currentAnswer?: string;
}

const Question: React.FC<quProps> = ({ quContent, currentAnswer }) => {
  // 解决把用户答案写到括号里问题的临时办法
  // 答案为空时，占一个空格
  const formatedAnswer = currentAnswer === '' ? ' ' : currentAnswer;

  // 用户提交答案后，把空格替换成字符
  const reg = /（/g;
  const finalContent = quContent.replace(reg, `（${formatedAnswer}`);

  return <h3 className={styles.quContent}>{finalContent}</h3>;
};

export default Question;
