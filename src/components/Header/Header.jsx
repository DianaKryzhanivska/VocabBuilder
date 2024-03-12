import React, { useState } from "react";
import sprite from "../../images/sprite.svg";
import { BurgerBtn, Container, Wrapper } from "./Header.styled";
import Menu from "./Menu/Menu";
import UserBar from "./UserBar/UserBar";
import Logo from "./Logo/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <Container>
          <Logo />
          <Wrapper>
            <UserBar />
            <BurgerBtn onClick={handleOpenMenu}>
              <svg width={32} height={22}>
                <use href={`${sprite}#burger`} />
              </svg>
            </BurgerBtn>
          </Wrapper>
        </Container>
      </header>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
