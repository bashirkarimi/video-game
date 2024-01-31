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

const getData = async (endPoint, selectedGenre, selectedPlatform) => {
  const params = new URLSearchParams({
    key: process.env.RAWG_API_KEY,
    ...(selectedGenre && { genres: selectedGenre }),
    ...(selectedPlatform && { parent_platforms: selectedPlatform }),
  });

  const url = `${apiUrl}${endPoint}?${params.toString()}`;
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return handleApiRequest(url, options);
};

export { getData };
