'use client'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Genres from "./components/Genres";
import PlateformSelector from "./components/PlateformSelector";

export default function Home() {
  const [genre, setGenre] = useState(null);
  const [platform, setPlatform] = useState(null);

  const handleGenre = (slug) => {
    setGenre(slug);
  };

  const handlePlateformChange = (id) => {
    setPlatform(id);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="container mx-auto w-full px-24 py-4">
        <Navbar />
      </nav>
      <main className="container flex mx-auto px-24">
        <div className="flex-auto w-1/4 justify-between">
          <Genres setGenre={handleGenre} />
        </div>
        <div className="w-full justify-between">
          <PlateformSelector setPlatformChange={handlePlateformChange}/>
          <Games getGenre={genre} getPlatform={platform}/>
        </div>
      </main>
      <footer className="container mx-auto w-full px-24 py-4">Footer</footer>
    </div>
  );
}
