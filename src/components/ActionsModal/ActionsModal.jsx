import React, { useCallback, useEffect } from "react";
import { ActionBtn, Content, Overlay } from "./ActionsModal.styled";
import sprite from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { deleteWordThunk } from "../../redux/word/operations";

const ActionsModal = ({ isOpen, onClose, wordId }) => {
  const dispatch = useDispatch();

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
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleDeleteWord = (wordId) => {
    console.log("wordId", wordId);
    dispatch(deleteWordThunk(wordId));
    onClose();
  };

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
          <ActionBtn type="button" onClick={() => handleDeleteWord(wordId)}>
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
