import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo.webp" alt="Logo" width={50} height={50} />
        <span className="ml-3 text-xl font-bold">Video Game</span>
      </div>
      {/* Add navigation links here */}
    </div>
  );
};

export default Navbar;
