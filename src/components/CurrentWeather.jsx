import { useContext } from 'react';
import { formatDate } from '../utils/formatDate';
import { TempModeContext } from '../context/TempModeContext';

const CurrentWeather = ({ weather, loading, error }) => {
  const { isCelsius } = useContext(TempModeContext);

  if (loading) {
    return (
      <section className="flex h-40">
        <div className="flex flex-col justify-between">
          <div className="w-32 h-6 bg-[#D8D8D8]"></div>
          <div className="w-28 h-9 bg-[#D8D8D8]"></div>
          <div className="w-72 h-14 bg-[#D8D8D8]"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="flex h-40 justify-around items-center">
        <h1 className="headline-l text-gray-900/80">Something went wrong...</h1>
        <img
          className="h-full"
          src="/icons/cloud-error-illustration.svg"
          alt=""
        />
      </div>
    );
  }

  const formatedDate = formatDate(weather.location.localtime);
  const temperature = isCelsius
    ? Math.round(weather.current.temp_c)
    : Math.round(weather.current.temp_f);
  const dewTemperatorue = isCelsius
    ? Math.round(weather.current.dewpoint_c)
    : Math.round(weather.current.dewpoint_f);

  return (
    <section className="flex h-40">
      <div className="flex flex-col justify-between py-2">
        <p className="body text-gray-900/60">{formatedDate}</p>
        <h1 className="headline-l text-gray-900/90">{weather.location.name}</h1>
        <h2 className="headline-xl text-gray-900/90">
          {temperature}° - {dewTemperatorue}°
        </h2>
      </div>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="max-w-16 max-h-16"
      />
    </section>
  );
};

export default CurrentWeather;
