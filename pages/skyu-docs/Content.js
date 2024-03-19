import React from "react";
import DashboardContent from "./dashboard";
import GettingStartedContent from "./getting-started";

const Content = ({ selectedItem, data }) => {
  return (
    <>
      {selectedItem ? (
        <>
          {selectedItem === "Home" && <Content />}
          {selectedItem === "Dashboard" && <DashboardContent />}
          {selectedItem === "Getting Started" && <GettingStartedContent />}
        </>
      ) : (
        <div>Hi</div>
      )}
    </>
  );
};

export default Content;
