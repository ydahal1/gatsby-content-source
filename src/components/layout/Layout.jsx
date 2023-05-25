import React, { useContext } from "react";
import { theme, Layout, ConfigProvider } from "antd";
import SiteHeader from "../header/Header";
import SiteFooter from "../footer/Footer";
import { globalContext } from "../ContextProvider/ContextProvider";
import "./Layout.css";

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
      <div className="app__layout">
        <SiteHeader appTheme={appTheme} setAppTheme={setAppTheme} />
        {/* <Layout style={{ padding: "20px" }}> */}
        <Content style={{ minHeight: "86vh" }}>{children}</Content>
        <SiteFooter>footer</SiteFooter>
        {/* </Layout> */}
      </div>
    </ConfigProvider>
  );
}

export default AppLayout;
