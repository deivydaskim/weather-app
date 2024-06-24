import { useContext } from 'react';

import TodayCard from './TodayCard';
import { TempModeContext } from '../context/TempModeContext';

const TodaysForecast = ({ weather, loading, error }) => {
  const { isCelsius } = useContext(TempModeContext);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  const forecastData = weather.forecast.forecastday[0].hour;
  const forecast = forecastData.slice(6).concat(forecastData.slice(0, 6)); //Start rendering from 6:00

  return (
    <section className="flex flex-col gap-4 bg-indigo-50 rounded-xl p-5 mt-12 justify-between">
      <h3 className="uppercase w-full body-2 text-gray-900/60">
        Todays Forecast
      </h3>
      <ul
        className="flex gap-3 h-32 w-full overflow-x-scroll"
        style={{ scrollbarWidth: 'thin' }}
      >
        {forecast.map((hr) => {
          const time = hr.time.split(' ')[1];
          const temperature = isCelsius
            ? Math.round(hr.temp_c)
            : Math.round(hr.temp_f);
          return (
            <TodayCard
              key={hr.time_epoch}
              time={time}
              icon={hr.condition.icon}
              temperature={temperature}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodaysForecast;
