const API_KEY = '53ab8546f5c841118bf164621242106';
const BASE_URL = 'http://api.weatherapi.com/v1';

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
