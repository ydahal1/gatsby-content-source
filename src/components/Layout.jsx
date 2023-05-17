import React, { useState, useContext } from "react";
import { ConfigProvider, theme, Layout, Menu, Switch, Input } from "antd";
import { customTheme } from "../../theme";
import SiteHeader from "./Header";
import SiteFooter from "./Footer";
import LayoutContext from "../../theme/LayoutContext";
import ThemeConfig from "./ThemeConfig";

import "./layout.css";

const { defaultAlgorithm, darkAlgorithm } = theme;
const { Content } = Layout;

function AppLayout({ children }) {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(LayoutContext);

  return (
    // <LayoutContext.Provider>
    // <ThemeConfig>
    //   <ConfigProvider
    //     theme={{
    //       token: customTheme,
    //       algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    //     }}
    //   >
    <Layout>
      <SiteHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Content style={{ minHeight: "86vh" }}>{children}</Content>
      <SiteFooter isDarkMode={isDarkMode}>footer</SiteFooter>
    </Layout>
    // </ConfigProvider>
    // </ThemeConfig>
    // </LayoutContext.Provider>
  );
}

export default AppLayout;

// Responsiveness - nav not working on smaller screens
