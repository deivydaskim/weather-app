import { useContext } from 'react';

import DetailsCard from './DetailsCard';
import { TempModeContext } from '../context/TempModeContext';
import { convertTo24Hour } from '../utils/formatter';
import { WeatherDetailsSkeleton } from './Skeletons';

const WeatherDetails = ({ weather, loading, error }) => {
  const { isCelsius } = useContext(TempModeContext);

  if (loading || error) {
    return <WeatherDetailsSkeleton />;
  }

  const {
    forecast: {
      forecastday: [{ astro, day }],
    },
    current,
  } = weather;

  const { sunrise, sunset } = astro;
  const { daily_chance_of_rain } = day;
  const {
    pressure_mb,
    pressure_in,
    wind_kph,
    wind_mph,
    feelslike_c,
    feelslike_f,
    vis_km,
    vis_miles,
    uv,
  } = current;

  const convertToUnit = (isCelsius, celsiusValue, fahrenheitValue, unit) => {
    return isCelsius
      ? `${celsiusValue} ${unit[0]}`
      : `${fahrenheitValue} ${unit[1]}`;
  };

  const weatherDetails = {
    sunrise: isCelsius ? convertTo24Hour(sunrise) : sunrise,
    sunset: isCelsius ? convertTo24Hour(sunset) : sunset,
    chanceOfRain: `${daily_chance_of_rain}%`,
    pressure: convertToUnit(isCelsius, pressure_mb, pressure_in, ['mb', 'in']),
    wind: convertToUnit(isCelsius, wind_kph, wind_mph, ['km/h', 'mph']),
    feelsLike: convertToUnit(isCelsius, feelslike_c, feelslike_f, ['°C', '°F']),
    visibility: convertToUnit(isCelsius, vis_km, vis_miles, ['km', 'mi']),
    uvIndex: `${uv} of 10`,
  };

  const detailsToRender = [
    {
      title: 'Sunrise',
      value: weatherDetails.sunrise,
      icon: '/icons/sunrise-icon.svg',
    },
    {
      title: 'Sunset',
      value: weatherDetails.sunset,
      icon: '/icons/sunset-icon.svg',
    },
    {
      title: 'Chance of rain',
      value: weatherDetails.chanceOfRain,
      icon: '/icons/drop-icon.svg',
    },
    {
      title: 'Pressure',
      value: weatherDetails.pressure,
      icon: '/icons/pressure-icon.svg',
    },
    {
      title: 'Wind',
      value: weatherDetails.wind,
      icon: '/icons/wind-icon.svg',
    },
    {
      title: 'UV index',
      value: weatherDetails.uvIndex,
      icon: '/icons/sun-icon.svg',
    },
    {
      title: 'Feels like',
      value: weatherDetails.feelsLike,
      icon: '/icons/temperature-icon.svg',
    },
    {
      title: 'Visibility',
      value: weatherDetails.visibility,
      icon: '/icons/visibility-icon.svg',
    },
  ];

  return (
    <section className="flex flex-col bg-indigo-50 rounded-xl p-5 my-6 justify-between">
      <h3 className="uppercase w-full body-2 text-gray-900/60">
        Weather Details
      </h3>
      <ul className="grid gap-5 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 w-full">
        {detailsToRender.map((detail, index) => (
          <DetailsCard
            key={index}
            title={detail.title}
            value={detail.value}
            icon={detail.icon}
          />
        ))}
      </ul>
    </section>
  );
};

export default WeatherDetails;
