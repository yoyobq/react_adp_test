import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { ChangeEvent } from 'react';
import styles from './index.less';

// interface BoilingProps {
//   celsius: number;
// }

// 先模仿官网做一个非ADP的原生React，TypeScript版本
// const BoilingVerdict: React.FC<BoilingProps> = (props: BoilingProps) => {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// };

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
    <Calculator />
  </PageHeaderWrapper>
);
