'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getGames } from '../../api/api-client';
import Platforms from './Platforms';

const GameCardList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getGames();
      if (data) {
        setGames(data.results);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.map((game) => (
        <div key={game.id} className="bg-gray-200 rounded-md overflow-hidden">
          <div className="card-image overflow-hidden relative aspect-video">
            <Image 
              src={game.background_image} 
              alt={game.name}
              layout="fill"
              sizes="25vw"
            />
          </div>
          <div className="mx-2 my-3 flex flex-col justify-between">
            <h5 className="text-2xl">{game.name}</h5>
            <p className="text-sm text-gray-600">{game.released}</p>
            <Platforms platforms={game.platforms} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCardList;
