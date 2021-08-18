import React from "react";
// import Routes from "../routes";
import Sidebar from "./Sidebar";
// import Nav from "./Nav";

function Layout(props) {
  
  return (
    // <div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth:"768px" }}>
        <Sidebar history={props.history} />
        {props.children}
      </div>
    // </div>
  );
}

export default Layout;
