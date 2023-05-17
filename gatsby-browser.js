import ContextProvider from "./src/components/ContextProvider/ContextProvider";

//Gatsby's wrap root element used to provide a global context set in ContextProvider File
export const wrapRootElement = ContextProvider;

//Wrap Page Element example, Gatsby has another global wrapper that wraps at the page level rather than root level
/**
 *export const wrapPageElement = ({ element }) =>{return (<></>)}}
 **/
