import React from "react";
// import projects from "../../../content/projects/info.json";
import { Card, Button } from "antd";
import { graphql } from "gatsby";

function Portfolio({ data }) {
  // const { slug, title, project_description, image_description } =
  //   data.allMarkdownRemark.nodes.frontmatter;
  const projects = data.allMarkdownRemark.nodes;

  console.log("----------------------------------");
  console.log(data.allMarkdownRemark.nodes);
  // console.log(slug, title, project_description, image_description);
  console.log("----------------------------------");

  return (
    <div
      className="card-container"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {console.log(projects)}
      {projects.map((project) => {
        return (
          <Card
            title={project.frontmatter.title}
            style={{ width: 350, margin: "10px" }}
            key={project.frontmatter.title}
          >
            <img
              alt={project.frontmatter.image_description}
              src={project.frontmatter.image}
            />
            <div>{project.frontmatter.project_description}</div>
            <div>
              <Button
                type="primary"
                href={`/projects/${project.frontmatter.slug}`}
              >
                Read More
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Portfolio;

//Export page query
export const query = graphql`
  query AllProjects {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          slug
          image
          title
          project_description
          image_description
        }
      }
    }
  }
`;
