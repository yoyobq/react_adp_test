import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; // 自动生成页面头部的map链接
import styles from './Component&props.less';

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div id="errors" className={styles.errors} />
    <div id="root">AAAAA</div>
  </PageHeaderWrapper>
);
