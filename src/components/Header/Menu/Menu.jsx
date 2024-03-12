import React, { useCallback, useEffect } from "react";
import {
  CloseBtn,
  Container,
  Content,
  MenuHeader,
  Overlay,
} from "./Menu.styled";
import sprite from "../../../images/sprite.svg";
import UserBar from "../UserBar/UserBar";
import usual from "../../../images/mob-menu-illustration@1x.png";
import retina from "../../../images/mob-menu-illustration@2x.png";
import usualTab from "../../../images/tab-menu-illustration@1x.png";
import retinaTab from "../../../images/tab-menu-illustration@2x.png";
import UserNav from "../UserNav/UserNav";
import { useMediaQuery } from "react-responsive";

const Menu = ({ isOpen, onClose }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });

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
                <svg>
                  <use href={`${sprite}#close`} />
                </svg>
              </CloseBtn>
            </MenuHeader>
            <UserNav />
          </Container>
          {isMobile && (
            <img
              srcSet={`${usual} 1x, ${retina} 2x`}
              alt="illustration"
              width={363}
              height={318}
            />
          )}
          {isTablet && (
            <img
              srcSet={`${usualTab} 1x, ${retinaTab} 2x`}
              alt="illustration"
              width={498}
              height={435}
            />
          )}
        </Content>
      </Overlay>
    </>
  );
};

export default Menu;
