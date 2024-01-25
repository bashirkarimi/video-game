
async function handleApiRequest(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error making API request:', error);
    return null;
  }
}


const  getGames = async () => {
  const url = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`;
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await handleApiRequest(url, options);
}

export { getGames };