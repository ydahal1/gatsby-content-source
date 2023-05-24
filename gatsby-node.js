const path = require("path");

// Fetch  data  for creating pages for each project
exports.createPages = async ({ graphql, actions }) => {
  const { data: projectPages } = await graphql(`
    query projects {
      allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/content/projects/*.md" } }) {
        nodes {
          frontmatter {
            slug
          }
          fileAbsolutePath
        }
      }
    }
  `);


  // Generate data for creating Learn ECL pages
  const { data: eclPages } = await graphql(`
    query learnECL {
      allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/content/ECLSyntax/*.md" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  //Create page for each project
  projectPages.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });

  //Create page for Learn ECL
  eclPages.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/learnECL/${node.frontmatter.slug}`,
      pathPrefix: "apple",
      component: path.resolve("./src/templates/learnECLPage.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
