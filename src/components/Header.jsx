import ToggleTemp from './ToggleTemp';
import SearchBar from './SearchBar';

const Header = ({changeLocation}) => {
  return (
    <header className="my-7 grid grid-cols-[153px_1fr_64px] grid-rows-1 gap-6 items-center">
      <img src="/icons/logo.svg" alt="Weather app logo" className="h-7" />
      <SearchBar changeLocation={changeLocation} />
      <ToggleTemp />
    </header>
  );
};

export default Header;
