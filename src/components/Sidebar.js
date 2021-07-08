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
  overflow: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px #8080802e solid;
    margin-bottom: 1rem;
    height: 74px;
 

  a {
    text-decoration: none;
    color: black;
  }
`;

const SidebarItem = styled.div`
  /* flex: 1 0 10%; */
  margin: 10px 36px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? "#f24607" : "")};
  border-radius: 4px;
  font-family: inherit;
  color: ${(props) => (props.active ? "#fff" : "")};;
  font-weight: 600;
padding:5px;
  a {
    /* padding: 40px; */
    /* color: black; */
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
