import ToggleTemp from './ToggleTemp';
import SearchBar from './SearchBar';

const Header = ({ changeLocation }) => {
  return (
    <header className="my-7 grid sm:grid-cols-[153px_1fr_64px] sm:grid-rows-1 grid-rows-1 grid-cols-2 gap-6 items-center ">
      <img
        src="/icons/logo.svg"
        alt="Weather app logo"
        className="h-7 row-start-1 col-start-1"
      />
      <div className="w-full relative sm:row-start-1 sm:col-span-1 row-start-2 col-span-full">
        <SearchBar changeLocation={changeLocation} />
      </div>
      <div className="relative sm:row-start-1 sm:col-start-3 row-start-1 col-start-2 justify-self-end">
        <ToggleTemp />
      </div>
    </header>
  );
};

export default Header;
