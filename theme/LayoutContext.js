// LayoutContext.js

import React, { createContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Replace with your actual state

  return <LayoutContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</LayoutContext.Provider>;
};

export default LayoutContext;
