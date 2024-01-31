import { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      className='w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      type="text"
      value={searchValue}
      onChange={handleInputChange}
      placeholder="Search..."
    />
  );
};

export default SearchInput;
