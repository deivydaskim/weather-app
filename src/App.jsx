import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import TodaysForecast from './components/TodaysForecast';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  return (
    <>
      <Header />
      <CurrentWeather />
      <TodaysForecast />
      <WeatherDetails />
    </>
  );
};

export default App;
