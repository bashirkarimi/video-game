'use client'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Genres from "./components/Genres";

export default function Home() {
  const [genre, setGenre] = useState(null);

  const handleGenre = (slug) => {
    setGenre(slug);
  };

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
          <Games getGenre={genre}/>
        </div>
      </main>
      <footer className="container mx-auto w-full px-24 py-4">Footer</footer>
    </div>
  );
}
