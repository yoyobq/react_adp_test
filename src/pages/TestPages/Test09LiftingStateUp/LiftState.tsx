import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';
import React, { ChangeEvent } from 'react';
import styles from './LiftState.less';

// 这张网页会比较复杂，各部分会用<Card>做分割
// 1 先模仿官网做一个非ADP的原生React，TypeScript版本
// 1.1 最初的，通过直接赋值的方式，确定状态的组件
interface BoilingProps {
  celsius: number;
}

const BoilingVerdict: React.FC<BoilingProps> = (props: BoilingProps) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

// 1.2 拥有一个input框的，根据输入判断状态的组件，不妨观察其对1.1的引用
class CalculatorOne extends React.Component {
  state = {
    temperature: '',
  };

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ temperature: event.target.value });
  }

  render() {
    const { temperature } = this.state;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

// 1.3 拥有两个
const Calculator: React.FC = () => {
  return (
    <div>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </div>
  );
};

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

interface TemperatureProps {
  scale: string;
}

class TemperatureInput extends React.Component<TemperatureProps, {}> {
  state = {
    temperature: '',
  };

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ temperature: event.target.value });
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input value={this.state.temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default (): React.ReactNode => (
  <PageHeaderWrapper className={styles.main}>
    <Card className={styles.pre}>
      <h1>1.1 最初的，通过直接赋值的方式，确定状态的组件</h1>
      <p>
        <BoilingVerdict celsius={100} />
        <BoilingVerdict celsius={50} />
      </p>
    </Card>
    <Card className={styles.pre}>
      <h1>1.2 拥有一个input框的，根据输入判断状态的组件</h1>
      <CalculatorOne />
    </Card>
    <Card className={styles.pre}>
      <Calculator />
    </Card>
  </PageHeaderWrapper>
);
