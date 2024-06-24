const API_KEY = '53ab8546f5c841118bf164621242106';
const BASE_URL = 'http://api.weatherapi.com/v1';

const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
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

export default getCurrentWeather;
