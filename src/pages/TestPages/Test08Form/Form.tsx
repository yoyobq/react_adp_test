import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Form, Input, message, Select } from 'antd';
import type { Store } from 'antd/es/form/interface';
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
// 由于adp中的表单控件和原生的React表单控件差别较大，这里就列3个adp的表单，不多赘述了。
class NameForm extends React.Component {
  onFinish = (values: Store) => {
    // console.log('Success:', values);
    message.info(`${values.username}你好，表单提交成功！`);
  };

  onFinishFailed = (errorInfo: Store) => {
    // console.log('Failed:', errorInfo);
    message.error(errorInfo.errorFields[0].errors);
  };

  render = () => (
    <Form {...layout} name="nameForm" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
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

// 为MuTextArea组件，设置自定义变量，规定数据类型
interface textAreaProps {
  row: number;
  text: string;
}

// 用箭头函数的形式定义MuTextArea组件，为了测试组合组件，故意多次一举
// tips：const并不是内容不变，而是内存指向不变
const MuTextArea: React.FC<textAreaProps> = (state: textAreaProps) => {
  // 此处参照AntDesgin的的TextArea用法，详见AD相关页面
  const { TextArea } = Input;
  const onFinish = (values: Store) => {
    // console.log(state);
    message.info(`${values.ins}`);
  };

  return (
    <Form
      {...layout}
      name="textAreaForm"
      onFinish={onFinish}
      // 给默认值的方法
      initialValues={{ ins: state.text }}
    >
      <Form.Item
        label="简介"
        // 一旦给了name，就是受控模式，deafultValue宣告无效
        name="ins"
        rules={[{ required: true, message: 'Please input sth!' }]}
      >
        <TextArea rows={state.row} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

const SelectList: React.FC<{}> = () => {
  const { Option } = Select;

  const handleChange = (value: any) => {
    message.info(`selected ${value}`);
  };

  return (
    <Form {...layout}>
      <Form.Item
        label="水果"
        // 一旦给了name，就是受控模式，deafultValue宣告无效
        name="fruit"
      >
        <Select defaultValue={1} onChange={handleChange}>
          {/* 从这段代码来讲，adp同时支持value是数值或是字符串 */}
          <Select.Option value={1}>葡萄柚</Select.Option>
          <Option value="lime">酸橙</Option>
          <Option value="coconut" disabled>
            椰子
          </Option>
          <Option value="mango">芒果</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card className={styles.pre}>
      <NameForm />
    </Card>
    <Card className={styles.pre}>
      <MuTextArea row={4} text="hello, this is a textArea." />
    </Card>
    <Card className={styles.pre}>
      <SelectList />
    </Card>
  </PageHeaderWrapper>
);
