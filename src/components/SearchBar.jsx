import { useState } from 'react';

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="w-full relative">
      <input
        placeholder="Search for cities"
        type="text"
        onSelect={() => setIsFocus(!isFocus)}
        className="body w-full h-10 leading-10 bg-indigo-50 focus:outline-indigo-400 rounded-lg px-4"
      />
      {isFocus && (
        <div className="body absolute bg-indigo-50 w-full mt-2 rounded-lg px-4 py-2 shadow-md">
          <ul>
            <li>Text</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
