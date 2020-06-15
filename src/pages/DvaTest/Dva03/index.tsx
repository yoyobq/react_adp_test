import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { Input } from 'antd';
import React from 'react';
import styles from './index.less';
import ProductsFull2 from './routes/ProductsFull2';

export default (): React.ReactNode => (
  <PageHeaderWrapper className={styles.main}>
    <ProductsFull2 />
    {/* <Input onChange={ value => console.log(value.target.value) } /> */}
  </PageHeaderWrapper>
);
