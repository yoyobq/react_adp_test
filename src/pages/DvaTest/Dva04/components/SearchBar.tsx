import { Input } from 'antd';
import React from 'react';
import styles from '../index.less';
import { SearchBarProps } from '../data';

const { Search } = Input;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return <Search className={styles.searchBar} onSearch={(value) => onSearch(value)} />;
};

export default SearchBar;
