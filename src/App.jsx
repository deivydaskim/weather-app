import { useState, useEffect } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

import { TempModeProvider } from './context/TempModeContext.jsx';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import TodaysForecast from './components/TodaysForecast';
import WeatherDetails from './components/WeatherDetails';
import getWeatherData from './api/WeatherAPI.js';

const App = () => {
  const [location, setLocation] = useLocalStorage('location', 'London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const weatherData = await getWeatherData('forecast', location);
        setWeather(weatherData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  const handleChangeLocation = (city) => {
    setLocation(city);
  };

  return (
    <TempModeProvider>
      <Header changeLocation={handleChangeLocation} />
      <CurrentWeather weather={weather} loading={loading} error={error} />
      <TodaysForecast weather={weather} loading={loading} error={error} />
      <WeatherDetails weather={weather} loading={loading} error={error} />
    </TempModeProvider>
  );
};

export default App;
