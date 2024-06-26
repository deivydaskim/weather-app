import { useState } from 'react';

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
          setTimeout(() => setError(null), 2000);
        }
      );
    } else {
      setError('Geolocation not supported by this browser.');
      setTimeout(() => setError(null), 2000);
    }
  };

  return (
    <>
      <button
        className={'absolute right-2 top-1/2 -translate-y-1/2'}
        onClick={handleGetWeather}
      >
        <img
          className="w-6 h-6"
          src="/icons/location-icon.svg"
        ></img>
      </button>
      {error && (
        <div className="body-1 absolute top-11 text-gray-900 bg-red-100 rounded-lg px-2 py-1 w-full z-20">
          {error}
        </div>
      )}
    </>
  );
};

export default GeolocationBtn;
