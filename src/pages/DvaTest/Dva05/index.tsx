import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { Input } from 'antd';
import React from 'react';
import styles from './index.less';
import SingleSelection2 from './routes/SingleSelection2';

export default (): React.ReactNode => (
  <PageHeaderWrapper className={styles.main}>
    <SingleSelection2 />
  </PageHeaderWrapper>
);
