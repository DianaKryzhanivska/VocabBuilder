import React, { useState } from "react";
import sprite from "../../images/sprite.svg";
import { BurgerBtn, Container, Wrapper } from "./Header.styled";
import Menu from "./Menu/Menu";
import UserBar from "./UserBar/UserBar";
import Logo from "./Logo/Logo";
import { useMediaQuery } from "react-responsive";
import UserNav from "./UserNav/UserNav";

const Header = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

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
            {isDesktop && <UserNav />}
            <UserBar />
            {!isDesktop && (
              <BurgerBtn onClick={handleOpenMenu}>
                <svg>
                  <use href={`${sprite}#burger`} />
                </svg>
              </BurgerBtn>
            )}
          </Wrapper>
        </Container>
      </header>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
