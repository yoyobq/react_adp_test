import { Input } from 'antd';
import React from 'react';
import { SearchBarProps } from '../data';

const { Search } = Input;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return <Search onSearch={(value) => onSearch(value)} />;
};

export default SearchBar;
