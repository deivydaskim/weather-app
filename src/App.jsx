import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import TodaysForecast from './components/TodaysForecast';

const App = () => {
  return (
    <>
      <Header />
      <CurrentWeather />
      <TodaysForecast />
    </>
  );
};

export default App;
