import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { Input } from 'antd';
import React from 'react';
import styles from './index.less';
import Products from './routes/Products';

export default (): React.ReactNode => (
  <PageHeaderWrapper className={styles.main}>
    <Products />
    {/* <Input onChange={ value => console.log(value.target.value) } /> */}
  </PageHeaderWrapper>
);
