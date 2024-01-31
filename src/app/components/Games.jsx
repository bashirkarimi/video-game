'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getData } from '../../api/api-client';
import Platforms from './Platforms';

const GameCardList = ({getGameQuery}) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getData('games', getGameQuery);
      if (data) {
        setGames(data.results);
      }
    };

    fetchGames();
  }, [getGameQuery]);


  const resizedImageUrl = (imageUrl) => {
    const target = 'media/';
    const position = imageUrl?.lastIndexOf(target) + target.length;
    const text = 'resize/640/-/';
    if (imageUrl) {
      return imageUrl.slice(0, position) + text + imageUrl.slice(position);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.map((game) => (
        <div key={game.id} className="bg-gray-200 rounded-md overflow-hidden">
          <div className="card-image overflow-hidden relative aspect-video">
            {game.background_image &&
              <Image 
                src={resizedImageUrl(game.background_image)} 
                alt={game.name}
                layout="fill"
                sizes="25vw"
              />
            }
          </div>
          <div className="mx-2 my-3 flex flex-col justify-between">
            <h5 className="text-2xl">{game.name}</h5>
            <p className="text-sm text-gray-600">{game.released}</p>
            {game.parent_platforms && 
              <Platforms parentPlatforms={game.parent_platforms} />
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCardList;
