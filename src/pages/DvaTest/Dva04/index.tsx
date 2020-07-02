import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import styles from './index.less';
import SingleSelection from './routes/SingleSelection';

export default (): React.ReactNode => (
  <PageHeaderWrapper className={styles.main}>
    <SingleSelection />
  </PageHeaderWrapper>
);
