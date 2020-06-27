import { Radio } from 'antd';
import { RadioProps } from 'antd/lib/radio';
import React from 'react';
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
  orderedTag: Array<string>;
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
const OptionList: React.FC<OptionListProps> = ({
  onChange,
  optList,
  currentAnswer,
  orderedTag,
}) => {
  // 不打乱选项顺序情况下
  const listItems = optList.map((item, index) => (
    <Option
      // A 的 ascii 码是65 转换，
      // 若 orderedTag 传来的顺序第一位是2，则转化的数字是67，即为C
      key={orderedTag[index]}
      tag={tagGroup[index]}
      optionContents={item}
      value={orderedTag[index]}
    />
  ));

  return (
    <Radio.Group onChange={(event) => onChange(event.target.value)} defaultValue={currentAnswer}>
      {listItems}
    </Radio.Group>
  );
};

export default OptionList;
