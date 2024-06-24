import { createContext, useState } from 'react';

const TempModeContext = createContext();

const TempModeProvider = ({ children }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeTempMode = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <TempModeContext.Provider value={{ isCelsius, changeTempMode }}>
      {children}
    </TempModeContext.Provider>
  );
};

export { TempModeContext, TempModeProvider };
