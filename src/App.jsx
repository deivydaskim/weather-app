import { useState } from 'react';

import { TempModeProvider } from './context/TempModeContext.jsx';

import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import TodaysForecast from './components/TodaysForecast';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [location, setLocation] = useState('Vilnius');

  return (
    <TempModeProvider>
      <Header />
      <CurrentWeather city={location} />
      <TodaysForecast />
      <WeatherDetails />
    </TempModeProvider>
  );
};

export default App;
