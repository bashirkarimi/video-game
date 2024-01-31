'use client'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Genres from "./components/Genres";
import PlateformSelector from "./components/PlateformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export default function Home() {
  const [gameQuery, setGameQuery] = useState({});

  const handleGenre = (genre) => {
    setGameQuery({
      ...gameQuery, 
      genre: { name: genre?.name, slug: genre?.slug }
    });
  };

  const handlePlateformChange = (platform) => {
    setGameQuery({
      ...gameQuery, 
      platform
    });
  }

  const handleOrderChange = (order) => {
    setGameQuery({
      ...gameQuery, 
      order
    });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="container mx-auto w-full px-24 py-4">
        <Navbar onSearchValue={(searchValue) => { setGameQuery({...gameQuery, searchValue})}}/>
      </nav>
      <main className="container flex mx-auto px-24">
        <div className="flex-auto w-1/4 justify-between">
          <Genres onSelectedGenre={handleGenre} />
        </div>
        <div className="w-full justify-between">
          <div className="mb-4">
            <GameHeading gameQuery={gameQuery}/>
          </div>
          <div className="flex w-full justify-between">
            <PlateformSelector onSelectedPlatform={handlePlateformChange}/>
            <SortSelector onSelectedOrder={handleOrderChange}/>
          </div>
          <Games getGameQuery={gameQuery}/>
        </div>
      </main>
      <footer className="container mx-auto w-full px-24 py-4">Footer</footer>
    </div>
  );
}
