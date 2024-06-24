import { useContext } from 'react';
import { formatDate } from '../utils/formatDate';
import { TempModeContext } from '../context/TempModeContext';

const CurrentWeather = ({ weather, loading, error }) => {
  const { isCelsius } = useContext(TempModeContext);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Error : {error}</h1>;
  }
  if (weather) {
    const formatedDate = formatDate(weather.location.localtime);
    const temperature = isCelsius
      ? Math.round(weather.current.temp_c)
      : Math.round(weather.current.temp_f);
    const dewTemperatorue = isCelsius
      ? Math.round(weather.current.dewpoint_c)
      : Math.round(weather.current.dewpoint_f);
    return (
      <section className="flex justify-between h-40 relative">
        <div className="flex flex-col justify-between py-2">
          <p className="body text-gray-900/60">{formatedDate}</p>
          <h1 className="headline-l text-gray-900/90">
            {weather.location.name}
          </h1>
          <h2 className="headline-xl text-gray-900/90">
            {temperature}° - {dewTemperatorue}°
          </h2>
        </div>
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          className="absolute right-0 w-24 h-24"
        />
      </section>
    );
  }
};

export default CurrentWeather;
