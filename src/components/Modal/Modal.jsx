import React, { useCallback, useEffect } from "react";
import { Content, Overlay } from "./Modal.styled";
import sprite from "../../images/sprite.svg";

const Modal = ({ isOpen, onClose, children }) => {
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
  }, [isOpen, handleKeyDown]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <Overlay onClick={onClose}>
        <Content onClick={(e) => e.preventDefault()}>
          <svg onClick={onClose}>
            <use href={`${sprite}#close`} />
          </svg>
          {children}
        </Content>
      </Overlay>
    </>
  );
};

export default Modal;
