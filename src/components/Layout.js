import React from "react";
import styled from "styled-components"
import Sidebar from "./Sidebar";

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
min-width:400px;

`








