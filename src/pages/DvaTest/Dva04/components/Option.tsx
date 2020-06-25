import { Radio } from 'antd';
import React from 'react';
import { RadioProps } from 'antd/lib/radio';

interface OptionProps extends RadioProps {
  sign: string;
  optionContents: string;
}

const Option: React.FC<OptionProps> = ({ value, sign, optionContents }) => {
  return (
    // <div>
    <Radio value={value}>
      {sign} {optionContents}‘
    </Radio>
    // </div>
  );
};

export default Option;
