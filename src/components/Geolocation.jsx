import { useState } from 'react';
import ErrorPopover from './ErrorPopover';

const GeolocationBtn = ({ changeLocation }) => {
  const [error, setError] = useState(null);

  const handleGetWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const cordinates =
            position.coords.latitude + ',' + position.coords.longitude;
          changeLocation(cordinates);
        },
        () => {
          setError('Failed to get your location. Check device settings.');
        }
      );
    } else {
      setError('Geolocation not supported by this browser.');
    }
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorPopover time={2000} clearError={clearErrorHandler}>{error}</ErrorPopover>
      )}
      <button
        className={'absolute right-2 top-1/2 -translate-y-1/2'}
        onClick={handleGetWeather}
      >
        <img className="w-6 h-6" src="/icons/location-icon.svg"></img>
      </button>
    </>
  );
};

export default GeolocationBtn;
