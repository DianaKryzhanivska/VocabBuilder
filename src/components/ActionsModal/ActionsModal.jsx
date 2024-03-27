import React, { useCallback, useEffect, useState } from "react";
import { ActionBtn, Content, Overlay } from "./ActionsModal.styled";
import sprite from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { deleteWordThunk } from "../../redux/word/operations";
import Modal from "../Modal/Modal";
import EditWordForm from "../EditWordForm/EditWordForm";

const ActionsModal = ({ isOpen, onClose, wordData }) => {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);

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

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

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
          <ActionBtn type="button" onClick={handleOpenEditModal}>
            <svg>
              <use href={`${sprite}#edit`} />
            </svg>
            <p>Edit</p>
          </ActionBtn>
          <ActionBtn
            type="button"
            onClick={() => handleDeleteWord(wordData._id)}
          >
            <svg>
              <use href={`${sprite}#delete`} />
            </svg>
            <p>Delete</p>
          </ActionBtn>
        </Content>
      </Overlay>
      <Modal isOpen={openEditModal} onClose={handleCloseEditModal}>
        <EditWordForm onClose={handleCloseEditModal} wordData={wordData} />
      </Modal>
    </>
  );
};

export default ActionsModal;
