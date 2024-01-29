import Navbar from "./components/Navbar";
import Games from "./components/Games";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="container mx-auto w-full px-24 py-4">
        <Navbar />
      </nav>
      <main className="container flex mx-auto px-24">
        <div className=" border-2  flex-auto w-1/4 justify-between">
          aside dslfkj kljsda;fkj;dlsa fj;kldsjf ;lkj fds;lk jf;lkjsfks
        </div>
        <div className="w-full justify-between">
          <Games />
        </div>
      </main>
      <footer className="container mx-auto w-full px-24 py-4">Footer</footer>
    </div>
  );
}
