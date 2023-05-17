import React, { useState } from "react";
import { ConfigProvider, theme, Layout, Menu, Switch, Input } from "antd";
import LayoutContext from "../../context/ContextProvider";
import { customTheme } from "../../context";
import AppLayout from "./Layout";

const { defaultAlgorithm, darkAlgorithm } = theme;

function ThemeConfig({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return <LayoutContext.Provider>{children}</LayoutContext.Provider>;
}

export default ThemeConfig;

//  <ConfigProvider
//       isDarkMode={isDarkMode}
//       setIsDarkMode={setIsDarkMode}
//       theme={{
//         token: customTheme,
//         algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
//       }}
//     >

//     </ConfigProvider>
