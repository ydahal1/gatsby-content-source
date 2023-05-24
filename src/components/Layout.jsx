import React, { useContext } from "react";
import { theme, Layout, ConfigProvider } from "antd";
import SiteHeader from "./Header";
import SiteFooter from "./Footer";
import { globalContext } from "./ContextProvider/ContextProvider";
import "./layout.css";

const { defaultAlgorithm, darkAlgorithm } = theme;
const { Content } = Layout;

function AppLayout({ children }) {
  const [appTheme, setAppTheme] = useContext(globalContext);
  return (
    <ConfigProvider
      theme={{
        algorithm: appTheme === "dark" ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout>
        <SiteHeader appTheme={appTheme} setAppTheme={setAppTheme} />
        <Content style={{ minHeight: "86vh" }}>{children}</Content>
        <SiteFooter>footer</SiteFooter>
      </Layout>
    </ConfigProvider>
  );
}

export default AppLayout;
