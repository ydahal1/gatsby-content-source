import React, { useState, createContext } from "react";

export const globalContext = createContext();

const ContextProvider = (props) => {
  //default to light mode
  const [appTheme, setAppTheme] = useState("light");
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [searchResults, setSearchResults] = useState("");

  return (
    <globalContext.Provider value={[appTheme, setAppTheme]}>
      {props.children}
    </globalContext.Provider>
  );
};

export default ({ element }) => <ContextProvider>{element}</ContextProvider>;
