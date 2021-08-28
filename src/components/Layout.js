import React from "react";
import styled from "styled-components"
// import Routes from "../routes";
import Sidebar from "./Sidebar";
// import Nav from "./Nav";

function Layout(props) {
  
  return (    
      <LayoutWrapper>
        <Sidebar history={props.history} />
        {props.children}
      </LayoutWrapper>    
  );
}

export default Layout;

const LayoutWrapper = styled.div`
display: flex;
flex-direction: column;
background:#ebebeb;
align-items: center;


`

