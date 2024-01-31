import Image from 'next/image';
import SearchInput from './SearchInput';

const Navbar = ({onSearchValue}) => {
  const handleSearch = (searchValue) => {
    onSearchValue(searchValue);
  }
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo.webp" alt="Logo" width={50} height={50} />
        <span className="ml-3 text-xl font-bold">Video Game</span>
      </div>
      <SearchInput onSearch={(handleSearch)} />
    </div>
  );
};

export default Navbar;
