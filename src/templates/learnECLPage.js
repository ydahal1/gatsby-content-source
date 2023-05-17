import { graphql } from "gatsby";
import React from "react";
import { Card } from "antd";
import AppLayout from "../components/Layout";

function LearnECLPage({ data }) {
  const { html } = data.markdownRemark;
  return (
    <AppLayout>
      <Card>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Card>
    </AppLayout>
  );
}

export default LearnECLPage;

export const query = graphql`
  query LearnECL($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
      }
    }
  }
`;
