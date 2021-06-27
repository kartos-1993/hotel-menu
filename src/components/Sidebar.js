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
          <Link to={item.route}>
            <SidebarItem key={item.name} active={index === activeIndex}>
              <p>{item.name || <Logo height="50px" width="100px" />}</p>
            </SidebarItem>
          </Link>
        );
      })}

      <div className="behind-the-scenes" />
    </SidebarParent>
  );
}

export default Sidebar;

const SidebarParent = styled.div`
  overflow: auto;
  overflow-y: hidden;
  white-space: nowrap;  
  align-items: center;
  display: flex;
 

  a {
    text-decoration: none;
    color: white;
  }
`;

const SidebarItem = styled.div`
  flex: 1 0 10%;
  margin: 20px 36px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? "#b15b00" : "")};
  border-radius: 4px;
  font-family: inherit;
  color: black;
  font-weight: 600;

  a {
    padding: 40px;
    background: #e3b448;
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
