import React, { useContext } from "react";
import { ConfigProvider, Space, Layout, Menu, Switch, Typography } from "antd";
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

function SiteFooter() {
  return (
    <Footer
      style={{
        display: "flex",
        // background: theme === "dark" ? "#141414" : "#FFFFFF",
        height: "70px",
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
        justifyContent: "space-between",
      }}
    >
      <Text> Copyright &copy; 2023 HPCCSystems. All rights reserved.</Text>
      <div className="footer_socialIcons">
        <GithubOutlined />
        <TwitterOutlined />
        <LinkedinOutlined />
        <MailOutlined />
      </div>
    </Footer>
  );
}

export default SiteFooter;
