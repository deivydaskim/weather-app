import { useState, useEffect } from 'react';

import { TempModeProvider } from './context/TempModeContext.jsx';

import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import TodaysForecast from './components/TodaysForecast';
import WeatherDetails from './components/WeatherDetails';
import { getWeatherData } from './api/WeatherAPI.js';

const App = () => {
  const [location, setLocation] = useState('Vilnius');

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const weatherData = await getWeatherData(location);
        setWeather(weatherData);
        console.log(weatherData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <TempModeProvider>
      <Header />
      <CurrentWeather weather={weather} loading={loading} error={error} />
      <TodaysForecast weather={weather} loading={loading} error={error} />
      <WeatherDetails weather={weather} loading={loading} error={error} />
    </TempModeProvider>
  );
};

export default App;
