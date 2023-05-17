import React from "react";
import { LayoutProvider } from "./theme/LayoutContext";

const RootElement = ({ children }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default RootElement;
