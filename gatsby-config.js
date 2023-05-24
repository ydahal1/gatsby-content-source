/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require("path");

module.exports = {
  siteMetadata: {
    title: `projects-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(`${__dirname}`, "content", "projects"),
        ignore: [`**/\.*`, `**/eclProjects/**/*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `learnECL`,
        path: path.join(`${__dirname}`, "content", "ECLSyntax"),
        ignore: [`**/\.*`, `**/projects/**/*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    `gatsby-transformer-remark`,
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: ["remark-react"],
    //   },
    // },
  ],
};
