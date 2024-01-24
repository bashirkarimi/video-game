'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getGames } from '../../api/api-client';

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
        <div key={game.id} className="card">
          <div className="card-image overflow-hidden relative aspect-video">
            <Image 
              src={game.background_image} 
              alt={game.name}
              layout="fill"
              sizes="25vw"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{game.name}</h5>
            <p className="card-text">{game.released}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCardList;
