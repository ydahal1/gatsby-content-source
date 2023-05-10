const path = require("path");
const jsonData = require("./content/projects/info.json"); // Replace with the path to your JSON file

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
