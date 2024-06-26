import { useContext } from 'react';

import TodayCard from './TodayCard';
import { TempModeContext } from '../context/TempModeContext';
import { TodaysForecastSkeleton } from './Skeletons';

const TodaysForecast = ({ weather, loading, error }) => {
  const { isCelsius } = useContext(TempModeContext);

  if (loading || error) {
    return <TodaysForecastSkeleton />
  }

  const forecastData = weather.forecast.forecastday[0].hour;
  const forecastSorted = forecastData.slice(6).concat(forecastData.slice(0, 6)); //Start rendering from 6:00

  return (
    <section className="flex flex-col gap-4 bg-indigo-50 rounded-xl p-5 mt-12 justify-between">
      <h3 className="uppercase w-full body-2 text-gray-900/60">
        Todays Forecast
      </h3>
      <ul
        className="flex gap-3 h-32 w-full overflow-x-scroll"
        style={{ scrollbarWidth: 'thin' }}
      >
        {forecastSorted.map((hour) => {
          const time = hour.time.split(' ')[1];
          const temperature = isCelsius
            ? Math.round(hour.temp_c)
            : Math.round(hour.temp_f);
          return (
            <TodayCard
              key={hour.time_epoch}
              time={time}
              icon={hour.condition.icon}
              temperature={temperature}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodaysForecast;
