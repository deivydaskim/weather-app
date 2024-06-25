import { useRef, useState } from 'react';
import { searchLocation } from '../api/WeatherAPI';

const SearchBar = ({ changeLocation }) => {
  // const [isFocus, setIsFocus] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearch, setRecentSearch] = useState([]);

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
    inputField.current.value = '';
  };

  return (
    <div className="w-full relative">
      <input
        ref={inputField}
        placeholder="Search for cities"
        type="text"
        // onClick={() => setIsFocus(!isFocus)}
        onChange={handleOnSearching}
        className="body w-full h-10 leading-10 bg-indigo-50 focus:outline-indigo-400 rounded-lg px-4"
      />
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
