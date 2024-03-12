import React from "react";
import { NavBox } from "./UserNav.styled";
import { NavLink } from "react-router-dom";

const UserNav = () => {
  return (
    <>
      <NavBox>
        <li>
          <NavLink to="/dictionary">Dictionary</NavLink>
        </li>
        <li>
          <NavLink to="/recommend">Recommend</NavLink>
        </li>
        <li>
          <NavLink to="/training">Training</NavLink>
        </li>
      </NavBox>
    </>
  );
};

export default UserNav;
