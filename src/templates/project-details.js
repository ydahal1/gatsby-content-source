import { graphql } from "gatsby";
import React from "react";

function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { image, image_description, project_description, slug, title } =
    data.markdownRemark.frontmatter;
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <img src={image} alt="Girl in a jacket" />
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
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
