import { ReactNode, createContext, useEffect, useState } from 'react';
import { AppSize } from './context.d';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataContext = createContext<any>({});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [appSize, setAppSize] = useState<AppSize>("Mobile");
  
  useEffect(() => {
    if (window.innerWidth < 768) {
      setAppSize("Mobile");
    } else if (window.innerWidth < 992) {
      setAppSize("Tablet");
    } else {
      setAppSize("Desktop");
    }
  }, []);

  const context = {
    appSize,
    setAppSize,
  };

  return (
    <DataContext.Provider value={context}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;