import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const withAppProvider = (Component) => {
  const WrapperComponent = () => {
    const [compareProducts, setCompareProducts] = useState([]);
    return (
      <AppContext.Provider value={{ compareProducts, setCompareProducts }}>
        <Component />
      </AppContext.Provider>
    );
  };

  return WrapperComponent;
};

export default withAppProvider;

export const useApp = () => {
  return useContext(AppContext);
};
