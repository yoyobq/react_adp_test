import { Radio } from 'antd';
import React from 'react';
import { RadioProps } from 'antd/lib/radio';

interface OptionProps extends RadioProps {
  optionName: string;
  optionContents: string;
}

const Option: React.FC<OptionProps> = ({ value, optionName, optionContents }) => {
  return (
    <Radio value={value}>
      ‘${optionName}${optionContents}‘
    </Radio>
  );
};

export default Option;
