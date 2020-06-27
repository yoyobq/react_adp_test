import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import styles from '../index.less';

interface resBdProps {
  isCorrect?: boolean;
}

const ResultBoard: React.FC<resBdProps> = ({ isCorrect }) => {
  if (isCorrect === undefined) {
    return <span />;
  }

  return isCorrect ? (
    <CheckOutlined className={styles[`result-correct`]} />
  ) : (
    <CloseOutlined className={styles[`result-wrong`]} />
  );
};

export default ResultBoard;
