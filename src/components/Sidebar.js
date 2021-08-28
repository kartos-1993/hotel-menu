import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import { Link } from "react-router-dom";
import Logo from "../asset/logo";

function Sidebar(props, { defaultActive }) {
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(
    lastActiveIndex || defaultActive
  );
  // const [scrollPosition, setScrollPosition] = useState()

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
      
    );    
    changeActiveIndex(activeItem);
  }, [location]);



  return (
    <SidebarParent>
      {SidebarItems.map((item, index) => {
        return (
          <Link to={item.route} key = {item.route}>
            <SidebarItem key={item.name} active={index === activeIndex}>
              <p>{item.name || <Logo height="50px" width="100px" />}</p>
            </SidebarItem>
          </Link>
        );
      })} 
    </SidebarParent>
  );
}

export default Sidebar;

const SidebarParent = styled.div`
    text-align: center;       
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;   
    position: fixed;
    bottom: 0;    
    min-width: 350px;
    max-width: 500px;
    background: white;
    padding:.2rem;
    box-shadow: .1rem .1rem .5rem .1rem rgba(0,0,0, .1);
    

  a {
    text-decoration: none;
    font-size: .8rem;
    color: black;
  }
`;

const SidebarItem = styled.div`
    
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? "#f24607" : "")};
  border-radius: 4px;
  font-family: inherit;
  color: ${(props) => (props.active ? "#fff" : "")};;
  font-weight: 600;
  padding:15px;
  a {
    
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;
