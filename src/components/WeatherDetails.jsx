import { useContext } from 'react';

import DetailsCard from './DetailsCard';
import { TempModeContext } from '../context/TempModeContext';
import { convertTo24Hour } from '../utils/formatDate';
import { WeatherDetailsSkeleton } from './Skeletons';

const WeatherDetails = ({ weather, loading, error }) => {
  const { isCelsius } = useContext(TempModeContext);

  if (loading || error) {
    return <WeatherDetailsSkeleton />;
  }

  if (weather) {
    const weatherAstro = weather.forecast.forecastday[0];
    const sunrise = isCelsius
      ? convertTo24Hour(weatherAstro.astro.sunrise)
      : weatherAstro.astro.sunrise;
    const sunset = isCelsius
      ? convertTo24Hour(weatherAstro.astro.sunset)
      : weatherAstro.astro.sunset;
    const chanceOfRain = weatherAstro.day.daily_chance_of_rain + '%';
    const pressure = isCelsius
      ? weather.current.pressure_mb + ' mb'
      : weather.current.pressure_in + ' in';
    const wind = isCelsius
      ? weather.current.wind_kph + ' km/h'
      : weather.current.wind_mph + ' mph';
    const feelsLike = isCelsius
      ? weather.current.feelslike_c + '°'
      : weather.current.feelslike_f + '°';
    const visibility = isCelsius
      ? weather.current.vis_km + ' km'
      : weather.current.vis_miles + ' mi';
    const uvIndex = weather.current.uv + ' of 10';

    return (
      <section className="flex flex-col bg-indigo-50 rounded-xl p-5 my-6 justify-between">
        <h3 className="uppercase w-full body-2 text-gray-900/60">
          Weather Details
        </h3>
        <ul className="grid gap-5 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 w-full">
          <DetailsCard
            title="Sunrise"
            value={sunrise}
            icon="/icons/sunrise-icon.svg"
          />
          <DetailsCard
            title="Sunset"
            value={sunset}
            icon="/icons/sunset-icon.svg"
          />
          <DetailsCard
            title="Chance of rain"
            value={chanceOfRain}
            icon="/icons/drop-icon.svg"
          />
          <DetailsCard
            title="Pressure"
            value={pressure}
            icon="/icons/pressure-icon.svg"
          />
          <DetailsCard title="Wind" value={wind} icon="/icons/wind-icon.svg" />
          <DetailsCard
            title="UV index"
            value={uvIndex}
            icon="/icons/sun-icon.svg"
          />
          <DetailsCard
            title="Feels like"
            value={feelsLike}
            icon="/icons/temperature-icon.svg"
          />
          <DetailsCard
            title="Visibility"
            value={visibility}
            icon="/icons/visibility-icon.svg"
          />
        </ul>
      </section>
    );
  }
};

export default WeatherDetails;
