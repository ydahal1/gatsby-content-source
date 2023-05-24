import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs, dark, atomDark, solarizedLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function EclCode({ children }) {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark} showLineNumbers={true} customStyle={{ fontSize: "19px", fontWeight: "500" }}>
      {children}
    </SyntaxHighlighter>
  );
}

export default EclCode;
