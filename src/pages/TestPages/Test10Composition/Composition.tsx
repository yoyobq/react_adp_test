import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import styles from './Composition.less';

const FancyBorder = (props: any) => (
  <div className={`FancyBorder FancyBorder-${props.color}`}>{props.children}</div>
);

const WelcomeDialog = () => (
  <FancyBorder color="blue">
    <h1 className="Dialog-title">Welcome</h1>
    <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
  </FancyBorder>
);

export default () => {
  return (
    <PageHeaderWrapper className={styles.main}>
      <WelcomeDialog />
    </PageHeaderWrapper>
  );
};
