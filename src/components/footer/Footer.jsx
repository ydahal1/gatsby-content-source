import React, { useContext } from "react";
import { ConfigProvider, Space, Layout, Menu, Switch, Typography } from "antd";
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import "./Footer.css";

const { Footer } = Layout;
const { Text } = Typography;

function SiteFooter() {
  return (
    <Footer className="site__footer">
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
