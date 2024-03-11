import React from "react";
import sprite from "../../images/sprite.svg";
import { LogoBox } from "./Header.styled";

const Header = () => {
  return (
    <>
      <LogoBox>
        <svg width={36} height={36}>
          <use href={`${sprite}#logo`} />
        </svg>
        <p>VocabBuilder</p>
      </LogoBox>
    </>
  );
};

export default Header;
