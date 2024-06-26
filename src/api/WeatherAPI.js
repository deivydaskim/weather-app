const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const getWeatherData = async (address, querie) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${address}.json?key=${API_KEY}&q=${querie}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while fetching:', error);
    throw error;
  }
};

export default getWeatherData;
