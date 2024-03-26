import React, { useCallback, useEffect } from "react";
import { ActionBtn, Content, Overlay } from "./ActionsModal.styled";
import sprite from "../../images/sprite.svg";

const ActionsModal = ({ isOpen, onClose }) => {
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
      //   document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      //   document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      //   document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Overlay onClick={onClose}>
        <Content onClick={(e) => e.stopPropagation()}>
          <ActionBtn type="button">
            <svg>
              <use href={`${sprite}#edit`} />
            </svg>
            <p>Edit</p>
          </ActionBtn>
          <ActionBtn type="button">
            <svg>
              <use href={`${sprite}#delete`} />
            </svg>
            <p>Delete</p>
          </ActionBtn>
        </Content>
      </Overlay>
    </>
  );
};

export default ActionsModal;
