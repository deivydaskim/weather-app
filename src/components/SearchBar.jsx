import { useRef, useState } from 'react';
import { searchLocation } from '../api/WeatherAPI';

const SearchBar = ({ changeLocation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const inputField = useRef('');

  const handleOnSearching = async (e) => {
    if (e.target.value.length >= 3) {
      setLoading(true);
      try {
        const search = await searchLocation(e.target.value);
        setSuggestions(search);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    if (e.target.value.length < 3) {
      setSuggestions([]);
    }
  };

  const handleChangeLocation = (name) => {
    changeLocation(name);
    setRecentSearch((prev) => {
      if (prev.includes(name)) {
        return [...prev];
      }
      return [name, ...prev];
    });
    inputField.current.value = '';
  };

  const handleRemoveRecent = (city) => {
    setRecentSearch((prev) => {
      const newArray = prev.filter((item) => item !== city);
      return [...newArray];
    });
  };

  const handleClearRecent = () => {
    setRecentSearch([]);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-full relative">
      <input
        ref={inputField}
        placeholder="Search for cities"
        type="text"
        onClick={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleOnSearching}
        className="body w-full h-10 leading-10 bg-indigo-50 focus:outline-indigo-400 rounded-lg px-4"
      />
      {isFocus && !inputField.current.value && recentSearch.length !== 0 && (
        <div
          onMouseDown={handleMouseDown}
          className="body absolute bg-indigo-50 w-full mt-2 rounded-lg px-4 py-2 shadow-md z-10"
        >
          <div className="flex justify-between">
            <h2 className="headline-s text-gray-900">Recent</h2>
            <button
              onClick={handleClearRecent}
              className="body-3 text-indigo-400/60 hover:text-indigo-400"
            >
              Clear all
            </button>
          </div>
          <ul>
            {recentSearch.map((city) => {
              return (
                <li
                  key={city}
                  onClick={() => changeLocation(city)}
                  className="flex justify-between hover:cursor-pointer p-1 my-1 rounded-lg hover:bg-indigo-100"
                >
                  <p className="body text-gray-900">{city}</p>
                  <button onClick={() => handleRemoveRecent(city)}>
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

      {inputField.current.value && (
        <div className="body absolute bg-indigo-50 w-full mt-2 rounded-lg px-4 py-2 shadow-md z-10">
          <ul>
            {loading ? (
              <li>Loading...</li>
            ) : error ? (
              <li>Error: {error.message}</li>
            ) : suggestions.length == 0 ? (
              <li>No result found</li>
            ) : (
              suggestions.map((item) => {
                return (
                  <li key={item.id}>
                    <button onClick={() => handleChangeLocation(item.name)}>
                      {item.name}, {item.country}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
