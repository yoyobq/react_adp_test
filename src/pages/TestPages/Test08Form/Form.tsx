import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Form, Input, message } from 'antd';
import { Store } from 'antd/es/form/interface';
import React from 'react';
import styles from './Form.less';

// 定义label和表单在行内的占比
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
// 定义表单尾部按钮位置
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

// 和官网的例子相比，虽然功能一致，但构建代码了较大的变化详情请看ant desgin/form相关页面
class NameForm extends React.Component {
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

interface Props {
  row: number;
  fun: string;
}

// const MuTextArea: React.FC<Props> = (state: Props) => {
//   const { TextArea } = Input;
//   // console.log(state);
//   return <TextArea rows={state.row}/>;
// }

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card className={styles.pre}>
      <NameForm />
    </Card>
    <Card className={styles.pre}>{/* <MuTextArea row={4} fun={'aaaa'}/> */}</Card>
  </PageHeaderWrapper>
);
