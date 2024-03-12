import React from "react";
import { LogoBox } from "./Logo.styled";
import sprite from "../../../images/sprite.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <LogoBox>
        <svg width={36} height={36}>
          <use href={`${sprite}#logo`} />
        </svg>
        <NavLink to="/">VocabBuilder</NavLink>
      </LogoBox>
    </>
  );
};

export default Logo;
