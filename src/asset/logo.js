import * as React from "react";
import logo from "../asset/logo.png";
import styled from "styled-components";

function Logo(props) {
  return <LogoImage src={logo} />;
}

const LogoImage = styled.img`
  height: 27px;
  border-radius: 50%;
  box-shadow: 0rem 1rem 2rem rgb(0 0 0 / 24%);
`;

export default Logo;