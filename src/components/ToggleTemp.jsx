import { Switch } from '@headlessui/react';
import { useState } from 'react';

const ToggleTemp = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group inline-flex h-8 w-16 items-center rounded-full bg-indigo-50 transition shadow-md"
      >
        <span className="size-7 translate-x-0.5 rounded-full bg-indigo-400 transition group-data-[checked]:translate-x-[33px]" />
      </Switch>
    </div>
  );
};

export default ToggleTemp;
