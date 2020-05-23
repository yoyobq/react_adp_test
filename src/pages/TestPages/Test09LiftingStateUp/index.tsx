import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';

const BoilingVerdict = (props: any) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

export default (): React.ReactNode => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper className={styles.main}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin spinning={loading} size="large" />
      </div>
      <BoilingVerdict />
    </PageHeaderWrapper>
  );
};
