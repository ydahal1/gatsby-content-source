// import { graphql } from "gatsby";
// import React from "react";
// import { Card } from "antd";
// import AppLayout from "../components/Layout";
// import LearnECLMenu from "../components/LearnECLMenu";
// import NextAndPrevBtns from "../components/NextAndPrevBtns";
// import CodeSnippet from "../components/CodeSnippet";

// function LearnECLPage({ data }) {
//   // let { html: htmlString } = data?.markdownRemark;

//   const htmlString = "<div><p>Hello</p><CodeSnippet>Hello world</CodeSnippet></div>";

//   const createMarkup = () => {
//     return { __html: htmlString };
//   };

//   const renderComponent = (tagName, props, children) => {
//     const Component = tagName;
//     return React.createElement(Component, props, children);
//   };

//   const renderHTML = () => {
//     const wrapper = document.createElement("div");
//     wrapper.innerHTML = htmlString;

//     const elements = wrapper.querySelectorAll("*");

//     for (let element of elements) {
//       if (element.tagName.startsWith("CODESNIPPET")) {
//         const props = {};
//         Array.from(element.attributes).forEach((attr) => {
//           props[attr.name] = attr.value;
//         });

//         const children = Array.from(element.childNodes).map((child) => child.textContent);
//         const codeSnippet = renderComponent(CodeSnippet, props, children);
//         element.replaceWith(codeSnippet);
//       }
//     }

//     return wrapper.innerHTML;
//   };

//   const renderedHTML = renderHTML();

//   return (
//     <AppLayout>
//       <div style={{ display: "flex", width: "100%", margin: "10px" }}>
//         <Card style={{ maxWidth: "20%", margin: "10px", padding: "10px", height: "80vh", overflow: "auto" }}>
//           <LearnECLMenu />
//         </Card>
//         <Card style={{ width: "80%", margin: "10px", padding: "10px", overflow: "auto" }}>
//           <div dangerouslySetInnerHTML={createMarkup()}></div>
//           <NextAndPrevBtns />
//         </Card>
//       </div>
//     </AppLayout>
//   );
// }

// export default LearnECLPage;

// export const query = graphql`
//   query LearnECL($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         slug
//       }
//     }
//   }
// `;


import { graphql } from "gatsby";
import React from "react";
import { Card } from "antd";
import AppLayout from "../components/Layout";
import LearnECLMenu from "../components/LearnECLMenu";
import NextAndPrevBtns from "../components/NextAndPrevBtns";
import EclCode from "../components/EclCode";

function LearnECLPage({ data }) {
  let { html: htmlString } = data?.markdownRemark;

  // const htmlString = "<div><p>Hello</p><CodeSnippet>Hello world</CodeSnippet></div>";

  const renderHTML = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = htmlString;

    const childNodes = Array.from(wrapper.childNodes);

    const renderNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === "ECLCODE") {
          const props = {};
          Array.from(node.attributes).forEach((attr) => {
            props[attr.name] = attr.value;
          });

          return <EclCode {...props}>{node.textContent}</EclCode>;
        } else {
          const children = Array.from(node.childNodes).map(renderNode);
          return React.createElement(node.tagName, null, children);
        }
      }
    };

    const renderedChildren = childNodes.map(renderNode);
    return <>{renderedChildren}</>;
  };

  const renderedHTML = renderHTML();

  return (
    <AppLayout>
      <div style={{ display: "flex", width: "100%", margin: "10px" }}>
        <Card style={{ maxWidth: "20%", margin: "10px", padding: "10px", height: "80vh", overflow: "auto" }}>
          <LearnECLMenu />
        </Card>
        <Card style={{ width: "80%", margin: "10px", padding: "10px", overflow: "auto" }}>
          {renderedHTML}
          <NextAndPrevBtns />
        </Card>
      </div>
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




//TODO - get rid of all warnings
//TODO - Start should be the first item in menu, learn ECL menu Item should take user there
