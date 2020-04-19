import React from "react";
import { Content } from "./styled";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Content>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/About">About</NavLink>

        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </Content>
  );
}
