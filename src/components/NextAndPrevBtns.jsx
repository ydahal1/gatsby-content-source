import React, { useContext } from "react";
import { Button } from "antd";
import { globalContext } from "./ContextProvider/ContextProvider";

function NextAndPrevBtns() {
  const [learnEclMenuItems, setLearnEclMenuItems, selectedLearnEclMenuItem, setSelectedLearnEclMenuItem] = useContext(globalContext);

  // When previous btn is clicked
  const handleGoToPrev = () => {
    const { label: currentPageSelection } = selectedLearnEclMenuItem;
    console.log("------ PREV button clicked ---------------");
    console.log(currentPageSelection);
    console.log("------------------------------------------");
  };

  // When next button is clicked
  const handleGoToNext = () => {
    const { label: currentPageSelection } = selectedLearnEclMenuItem;
    console.log("------ NEXT button clicked ---------------");
    console.log(currentPageSelection);
    console.log("------------------------------------------");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
      {selectedLearnEclMenuItem.indexOfSelectedPage < 1 ? (
        <div></div>
      ) : (
        <Button
          type="primary"
          style={{ background: "red" }}
          onClick={() => {
            alert("prev");
          }}
        >
          Previous
        </Button>
      )}
      <Button type="primary" onClick={handleGoToNext}>
        Next
      </Button>
    </div>
  );
}

export default NextAndPrevBtns;
