import { useState, useEffect } from 'react';
import { getData } from '../../api/api-client';

const PlateformSelector = ({ setPlatformChange }) => {
  const [platforms, setPlatforms] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  useEffect(() => {
      const fetchPlatforms = async () => {
        const data = await getData('platforms/lists/parents');
        if (data) {
          setPlatforms(data.results);
        }
      };
  
      fetchPlatforms();
  }, []);

  const handlePlatformSelector = (id) => {
    setSelectedPlatform(id);
    setPlatformChange(id);
  }

  return (
    <div className="relative w-1/5 mb-4">
      <select 
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => handlePlatformSelector(e.target.value)}
      >
        <option value="">All Platforms</option>
        {platforms.map(platform => (
          <option key={platform.id} value={platform.id}>{platform.name}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 0h20v20H0z" fill="none"/>
          <path d="M10 12l-6-6h12l-6 6z"/>
        </svg>
      </div>
    </div>
  );
};

export default PlateformSelector;
