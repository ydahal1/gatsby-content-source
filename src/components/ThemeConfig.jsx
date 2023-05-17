import React, { useState } from "react";
import { ConfigProvider, theme, Layout, Menu, Switch, Input } from "antd";
import LayoutContext from "../../theme/LayoutContext";
import { customTheme } from "../../theme";
import AppLayout from "./Layout";

const { defaultAlgorithm, darkAlgorithm } = theme;

function ThemeConfig({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <LayoutContext.Provider>
      <ConfigProvider
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        theme={{
          token: customTheme,
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <AppLayout />
      </ConfigProvider>
    </LayoutContext.Provider>
  );
}

export default ThemeConfig;
