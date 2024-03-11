import React, { useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  CloseBtn,
  Container,
  Content,
  MenuHeader,
  Overlay,
  UserNav,
} from "./Menu.styled";
import sprite from "../../../images/sprite.svg";
import UserBar from "../UserBar/UserBar";
import usual from "../../../images/mob-menu-illustration@1x.png";
import retina from "../../../images/mob-menu-illustration@2x.png";

const Menu = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Overlay onClick={onClose}>
        <Content onClick={(e) => e.stopPropagation()}>
          <Container>
            <MenuHeader>
              <UserBar />
              <CloseBtn onClick={onClose}>
                <svg width={32} height={32}>
                  <use href={`${sprite}#close`} />
                </svg>
              </CloseBtn>
            </MenuHeader>
            <UserNav>
              <NavLink to="/dictionary">Dictionary</NavLink>
              <NavLink to="/recommend">Recommend</NavLink>
              <NavLink to="/training">Training</NavLink>
            </UserNav>
          </Container>
          <img
            srcSet={`${usual} 1x, ${retina} 2x`}
            alt="illustration"
            width={363}
            height={318}
          />
        </Content>
      </Overlay>
    </>
  );
};

export default Menu;
