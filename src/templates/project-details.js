import { graphql } from "gatsby";
import React from "react";
import { Card } from "antd";


function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { image, title } =
    data.markdownRemark.frontmatter;
  return (
      <Card>
        <h1>{title}</h1>
        <div>
          <img src={image} alt={title} />
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </Card>
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
