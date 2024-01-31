'use client'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { getData } from "../../api/api-client";


const Genres = ({onSelectedGenre}) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getData('genres');
      if (data) {
        setGenres(data.results);
      }
    };

    fetchGenres();
  }, []);

  const handleGenre = (slug, id) => {
    onSelectedGenre(slug);
    setSelectedGenre(id);
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Genres</h2>
      <ul className="flex flex-col space-y-2 text-gray-700">
        {genres.map((genre, index) => (
          <li key={index}>
            <button 
              className="flex pr-3 gap-3 items-center bg-gray-100 hover:bg-gray-300 hover:transition-colors rounded overflow-hidden"
              onClick={() => handleGenre(genre.slug, genre.id)}
            >
              <span className="block w-8 h-8">
                <Image 
                  src={(genre.image_background)} 
                  alt={genre.name}
                  width={64}
                  height={64}
                  className="object-cover min-h-full"
                />
              </span>
              <span className={selectedGenre === genre.id ? 'font-semibold bg-gray-200' : ''}>{genre.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Genres