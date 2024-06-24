import placeholder from '/icons/cloud-error-illustration.svg';
import getCurrentWeather from '../api/WeatherAPI';
import { useContext, useEffect, useState } from 'react';
import formatDate from '../utils/formatDate';
import { TempModeContext } from '../context/TempModeContext';

const CurrentWeather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isCelsius } = useContext(TempModeContext);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCurrentWeather(city);
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Error : {error}</h1>;
  }
  if (weather) {
    const formatedDate = formatDate(weather.location.localtime);
    return (
      <section className="flex justify-between h-40 text">
        <div className="flex flex-col justify-between py-2">
          <p className="body text-gray-900/60">{formatedDate}</p>
          <h1 className="headline-l text-gray-900/90">
            {weather.location.name}
          </h1>
          <h2 className="headline-xl text-gray-900/90">
            {isCelsius ? weather.current.temp_c : weather.current.temp_f}° -{' '}
            {isCelsius
              ? weather.current.dewpoint_c
              : weather.current.dewpoint_f}
            °
          </h2>
        </div>
        <img src={placeholder} alt="" />
      </section>
    );
  }
};

export default CurrentWeather;
