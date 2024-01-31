
const GameHeading = ({ gameQuery }) => {
  const genreName = gameQuery?.genre?.name;
  const platformName = gameQuery?.platform?.name;  

  return (
    <header>
      <h1 className="text-3xl font-bold">{genreName} {platformName} Games</h1>
    </header>
  );
};

export default GameHeading;
