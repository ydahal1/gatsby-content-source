import React from "react";
import { Typography, Row, Col, Button } from "antd";
import AppLayout from "../components/Layout";
import heroImage from "../images/hero.jpg";

const { Text } = Typography;

function IndexPage() {
  return (
    <AppLayout>
      <div>
        <div style={{ width: "100%", padding: "10px" }}>
          <img
            src={heroImage}
            alt="hero image"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div style={{ padding: "20px" }}>
              <div style={{ marginBottom: "20px" }}>
                <Text>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </Text>
              </div>
              <Button type="primary">Learn ECL</Button>
            </div>
          </Col>
          <Col span={12}>
            <div style={{ padding: "20px" }}>
              <div style={{ marginBottom: "20px" }}>
                <Text>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </Text>
              </div>
              <Button type="primary">Explore All Projects</Button>
            </div>
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
}

export default IndexPage;
