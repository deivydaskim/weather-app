import { useState, useEffect, useRef } from 'react';
import { useDebounce, useLocalStorage } from '@uidotdev/usehooks';

import { searchLocation } from '../api/WeatherAPI';
import GeolocationBtn from './Geolocation';

const SearchBar = ({ changeLocation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useLocalStorage(
    'recentSearches',
    []
  );
  const [isFocus, setIsFocus] = useState(false);

  const inputField = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearchTerm.length > 2) {
        setLoading(true);
        try {
          const search = await searchLocation(debouncedSearchTerm);
          setSuggestions(search);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedSearchTerm]);

  const handleOnSearching = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectLocation = (city, region) => {
    const isCityInRecentSearches = recentSearches.some(
      (search) => search.city === city
    );

    setRecentSearches((prev) => {
      let updatedSearches = prev;

      if (!isCityInRecentSearches) {
        if (updatedSearches.length >= 3) {
          updatedSearches = updatedSearches.slice(0, 2);
        }
        updatedSearches = [{ city, region }, ...updatedSearches];
      }
      return updatedSearches;
    });

    changeLocation(city);
    setSearchTerm('');
    inputField.current.blur();
  };

  const handleRemoveRecent = (city) => {
    setRecentSearches((prev) => {
      const updatedArray = prev.filter((item) => item.city !== city);
      return updatedArray;
    });
  };

  const handleRemoveAllRecent = () => {
    setRecentSearches([]);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full relative">
      <GeolocationBtn changeLocation={changeLocation} />
      <input
        ref={inputField}
        value={searchTerm}
        placeholder="Search for cities"
        type="text"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleOnSearching}
        className="body w-full h-10 leading-10 bg-indigo-50 focus:outline-indigo-400 rounded-lg px-4"
      />
      {isFocus && searchTerm && (
        <div
          onMouseDown={handleMouseDown}
          className="body absolute bg-indigo-50 w-full mt-2 rounded-lg px-4 py-2 shadow-md z-10"
        >
          <ul>
            {loading ? (
              <li>Loading...</li>
            ) : error ? (
              <li>Error: {error.message}</li>
            ) : suggestions.length == 0 ? (
              <li>No result found</li>
            ) : (
              suggestions.map((location) => {
                return (
                  <li key={location.id}>
                    <button
                      onClick={() =>
                        handleSelectLocation(location.name, location.region)
                      }
                    >
                      {location.name}, {location?.region}, {location?.country}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}

      {isFocus && !searchTerm && recentSearches.length !== 0 && (
        <div
          onMouseDown={handleMouseDown}
          className="body absolute bg-indigo-50 w-full mt-2 rounded-t-lg shadow-md z-10"
        >
          <div className="flex justify-between px-4 my-2">
            <h2 className="headline-s text-gray-900">Recent</h2>
            <button
              onClick={handleRemoveAllRecent}
              className="body-3 text-indigo-400/60 hover:text-indigo-400"
            >
              Clear all
            </button>
          </div>
          <ul>
            {recentSearches.map((search) => {
              return (
                <li
                  key={search.city}
                  onClick={() => {
                    changeLocation(search.city);
                    inputField.current.blur();
                  }}
                  className="flex justify-between hover:cursor-pointer hover:bg-indigo-100 px-4 py-2"
                >
                  <div>
                    <h1 className="body text-gray-900">{search.city}</h1>
                    <p className="text-[12px] text-gray-900/60">
                      {search.region}
                    </p>
                  </div>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleRemoveRecent(search.city);
                    }}
                  >
                    <img
                      src="/icons/trash-icon.svg"
                      alt="trash icon"
                      className="opacity-60 hover:opacity-100"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
