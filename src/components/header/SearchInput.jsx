import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/products?filter=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className='flex items-center justify-center'>
      <div className="relative">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={(event) => event.key === 'Enter' ? handleSearch() : null}
          className="pl-4 py-2 no-underline rounded-md focus:outline-none focus:ring ring-primary-2 focus:border-primary border"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1 p-2 rounded-md text-dark-gray hover:bg-light-gray-2 focus:outline-none"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
