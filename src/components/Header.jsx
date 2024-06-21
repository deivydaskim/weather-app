const Header = () => {
  return (
    <header className="my-7 px-5 flex justify-between gap-5">
      <div>
        <img src="/icons/logo.svg" alt="Weather app logo" />
      </div>
      <div className="w-full">
        <input className="w-full" type="text" />
      </div>
      <div>
        <button className="border-2 rounded-full whitespace-nowrap flex justify-between">
          <span className="bg-slate-400 rounded-full w-6 block m-0.5">
            F
          </span>
          <span className="bg-slate-400 rounded-full w-6 block m-0.5">
            C
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
