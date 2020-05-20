import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Form, Input, message } from 'antd';
import { Store } from 'antd/es/form/interface';
import React from 'react';
import styles from './Form.less';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

class NameForm extends React.Component {
  // constructor(props: any) {
  //   super(props);
  // };

  onFinish = (values: Store) => {
    // console.log('Success:', values);
    message.info(`${values.username}你好，表单提交成功！`);
  };

  onFinishFailed = (errorInfo: Store) => {
    // console.log('Failed:', errorInfo);
    message.error(errorInfo.errorFields[0].errors);
  };

  render() {
    return (
      <Form
        {...layout}
        name="nameForm"
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="名字"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card className={styles.pre}>
      <NameForm />
    </Card>
  </PageHeaderWrapper>
);
