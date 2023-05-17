import { graphql } from "gatsby";
import React from "react";
import { Card } from "antd";
import AppLayout from "../components/Layout";

function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { image, title } = data.markdownRemark.frontmatter;
  return (
    <AppLayout>
      <Card>
        <h1>{title}</h1>
        <div>
          <img src={image} alt={title} />
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </Card>
    </AppLayout>
  );
}

export default ProjectDetails;

export const query = graphql`
  query ProjectDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        image
        image_description
        project_description
        slug
        title
      }
    }
  }
`;
