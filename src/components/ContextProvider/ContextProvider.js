import React, { useState, createContext } from "react";

export const globalContext = createContext();

const ContextProvider = (props) => {
  //default to light mode
  const [appTheme, setAppTheme] = useState("light");
  const [learnEclMenuItems, setLearnEclMenuItems] = useState([]);
  const [selectedLearnEclMenuItem, setSelectedLearnEclMenuItem] = useState({})
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [searchResults, setSearchResults] = useState("");

  return (
    <globalContext.Provider
      value={[appTheme, setAppTheme, learnEclMenuItems, setLearnEclMenuItems, selectedLearnEclMenuItem, setSelectedLearnEclMenuItem]}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default ({ element }) => <ContextProvider>{element}</ContextProvider>;
