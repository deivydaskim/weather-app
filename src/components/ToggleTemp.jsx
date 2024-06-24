import { Switch } from '@headlessui/react';
import { useContext } from 'react';
import { TempModeContext } from '../context/TempModeContext.jsx';


const ToggleTemp = () => {
  const { isCelsius, changeTempMode } = useContext(TempModeContext)

  return (
    <div className="relative">
      <Switch
        checked={isCelsius}
        onChange={changeTempMode}
        className="group inline-flex h-8 w-16 items-center rounded-full bg-indigo-50 transition shadow-md"
      >
        <span className="size-7 translate-x-0.5 rounded-full bg-indigo-400 transition group-data-[checked]:translate-x-[33px]" />
        <span className={`absolute z-10 left-[7px] body-2 ${!isCelsius ? 'text-white' : 'text-black'}`}>°F</span>
        <span className={`absolute z-10 right-[11px] body-2 ${isCelsius ? 'text-white' : 'text-black'}`}>°C</span>
      </Switch>
    </div>
  );
};

export default ToggleTemp;
