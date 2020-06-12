import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import ProductList from './components/Products';
import styles from './index.less';

export default (): React.ReactNode => (
  <PageHeaderWrapper className={styles.main}>
    <ProductList />
  </PageHeaderWrapper>
);
