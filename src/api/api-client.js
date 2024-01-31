const apiUrl = 'https://api.rawg.io/api/';
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

const  getData = async (endPoint, genre) => {
  const params = new URLSearchParams();

  params.append('key', process.env.RAWG_API_KEY);
  genre && params.append('genres', genre);

  const url = `${apiUrl}${endPoint}?${params.toString()}`;
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await handleApiRequest(url, options);
}

export { getData };