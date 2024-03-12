import React from "react";
import { LogoBox, NavLinkStyled } from "./Logo.styled";
import sprite from "../../../images/sprite.svg";

const Logo = () => {
  return (
    <>
      <LogoBox>
        <svg>
          <use href={`${sprite}#logo`} />
        </svg>
        <NavLinkStyled to="/">VocabBuilder</NavLinkStyled>
      </LogoBox>
    </>
  );
};

export default Logo;
