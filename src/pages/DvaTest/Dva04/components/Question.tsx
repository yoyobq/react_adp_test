import React from 'react';
import styles from '../index.less';

interface QuProps {
  QuContent: string;
}

const Question: React.FC<QuProps> = ({ QuContent }) => (
  <h3 className={styles.quContent}>{QuContent}</h3>
);

export default Question;
