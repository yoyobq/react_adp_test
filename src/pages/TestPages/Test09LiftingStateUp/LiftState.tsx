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
class CalculatorV2 extends React.Component {
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

// 1.3 拥有两个Input框，但不能互联，也让上级组件Calcultor无法感知Input数据的初始框架
const CalculatorV3: React.FC = () => {
  return (
    <div>
      <TemperatureInputV3 scale="c" />
      <TemperatureInputV3 scale="f" />
    </div>
  );
};

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

interface TemperatureProps_1_3 {
  scale: string;
}

class TemperatureInputV3 extends React.Component<TemperatureProps_1_3, {}> {
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
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

// 1.4 拥有两个
// 下面这三个函数很有意思，由于他的功能单一，如果把他们放到一个类作为方法的话
// 会触发 Enforce that class methods utilize this (class-methods-use-this) 这条Eslint错误
// 显然这类函数应该移到类外部作为独立的功能存在更好，如果非要放进类的内部则应该加 static声明
// 摄氏度
const toCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;

// 华氏度
const toFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

// 虽然很早就知道函数可以作为参数出现，但从来没有这么写过，这种新思路值得注意
const tryConvert = (temperature: any, convert: Function) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};
class CalculatorV4 extends React.Component {
  state = {
    temperature: '',
    scale: '',
  };

  constructor(props: any) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: 'c',
    };
  }

  handleCelsiusChange = (temperature: any) => this.setState({ scale: 'c', temperature });

  handleFahrenheitChange = (temperature: any) => this.setState({ scale: 'f', temperature });

  render() {
    const { scale } = this.state;
    const { temperature } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInputV4
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInputV4
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

interface TemperatureProps_1_4 {
  scale: string;
  temperature: number | string;
  onTemperatureChange: any;
}

class TemperatureInputV4 extends React.Component<TemperatureProps_1_4, {}> {
  // 注意state up后 temperature 不再作为 Input的 state
  // state = {
  //   temperature: '',
  // };

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = {
    //   temperature: '',
    // };
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    // this.setState({ temperature: event.target.value });
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    // 注意此处改动，原本是state，现在是props
    // const temperature = this.state.temperature;
    const { temperature } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
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
        <BoilingVerdict celsius={70} />
      </p>
    </Card>
    <Card className={styles.pre}>
      <h1>1.2 拥有一个input框的，根据输入判断状态的组件</h1>
      <CalculatorV2 />
    </Card>
    <Card className={styles.pre}>
      <h1>1.3 拥有两个Input框，但不能互联，也让上级组件Calcultor无法感知Input数据的初始框架</h1>
      <CalculatorV3 />
    </Card>
    <Card className={styles.pre}>
      <h1>1.4 拥有两个Input框</h1>
      <CalculatorV4 />
    </Card>
  </PageHeaderWrapper>
);
