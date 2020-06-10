import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import styles from './index.less';
import ProductList from './Products';

export default (): React.ReactNode => (
  <PageHeaderWrapper className={styles.main}>
    <ProductList />
  </PageHeaderWrapper>
);
