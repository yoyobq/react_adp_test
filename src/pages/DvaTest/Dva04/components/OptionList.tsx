import { Radio } from 'antd';
import React from 'react';
import { RadioProps } from 'antd/lib/radio';
import styles from '../index.less';

interface OptionProps extends RadioProps {
  tag: string;
  optionContents: string;
}

interface OptionListProps {
  optList: Array<string>;
  // realAnswer: string;
  currentAnswer?: string;
  onChange: Function;
}

// 选择题 A,B,C,D... 标记
const tagGroup = ['A', 'B', 'C', 'D'];

// 选项组里的一条
const Option: React.FC<OptionProps> = ({ tag, value, optionContents }) => {
  return (
    <Radio value={value} className={styles[`option-line`]}>
      {tag}、{optionContents}
    </Radio>
  );
};

// 利用React List的知识，将option数组重新组合，变成页面上的ABCD选项列表
const OptionList: React.FC<OptionListProps> = ({ onChange, optList, currentAnswer }) => {
  const listItems = optList.map((item, index) => (
    <Option
      key={tagGroup[index]}
      tag={tagGroup[index]}
      optionContents={item}
      value={tagGroup[index]}
    />
  ));

  return (
    <Radio.Group onChange={(event) => onChange(event.target.value)} defaultValue={currentAnswer}>
      {listItems}
    </Radio.Group>
  );
};

export default OptionList;
