import React, { useContext } from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { Menu } from "antd";
import _ from "lodash";
import { globalContext } from "./ContextProvider/ContextProvider";

function LearnECLMenu() {
  // const [selectedLearnEclMenuItem, setSelectedLearnEclMenuItem] = useContext(globalContext);
  const [learnEclMenuItems, setLearnEclMenuItems] = useContext(globalContext);

  // When nav item is clicked
  const handleECLPageNavigation = (e) => {
    const selectedPage = e.key.split("/")[2];
    const indexOfSelectedPage = menuItems.findIndex((item) => item.label === _.startCase(selectedPage));
    // setSelectedLearnEclMenuItem({ selectedPage, indexOfSelectedPage });
    navigate(e.key);
  };

  // get all learn ECL tutorial pages
  const {
    allMarkdownRemark: { nodes: eclPages },
  } = useStaticQuery(graphql`
    query AllEclPages {
      allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/content/ECLSyntax/*.md" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // Menu Items

  const menuItems = eclPages.map((eclPage, index) => ({
    label: _.startCase(eclPage.frontmatter.slug),
    key: `/learnECL/${eclPage.frontmatter.slug}`,
  }));

  // Set menu Items to context
  // setLearnEclMenuItems(menuItems);

  // JSX
  return <Menu onClick={handleECLPageNavigation} mode="vertical" items={menuItems} />;
}

export default LearnECLMenu;

// TODO - Go through all graphQL queries and handled unexpected data or null
//TODO - next and previous button - 2
//TODO - try now button - 3
//TODO - make navigation work - 1
//TODO - Change casing on menu
// TODO - Cicd
// TODO - add styling on all project pages
// TODO - add styling on single project page
// TODO - Deploy to GH pages
// TODO - Manage content of this project from data repo
// TODO - Sample
// TODO - strip css
// TODO - evaluate file structure
// TODO - make theme state global, currently not  working on dynamically created pages such as single porject pages
// TODO - Clean imports , consolidate if necessary
// TODO - wrap code snippit in code snippit component
// TODO - rename context provider
//TODO -  Look dev console and clean up
