import React, { useState } from "react";
import sprite from "../../../images/sprite.svg";
import { Btn, TrainingLink, Wrapper } from "./AddWordBtn.styled";
import { NavLink } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";

const AddWordBtn = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Wrapper>
        <Btn type="button" onClick={handleOpenModal}>
          <p>Add word</p>
          <svg>
            <use href={`${sprite}#plus`} />
          </svg>
        </Btn>
        <TrainingLink>
          <NavLink to="/training">Train oneself</NavLink>
          <svg>
            <use href={`${sprite}#arrow-right`} />
          </svg>
        </TrainingLink>
      </Wrapper>
      <Modal isOpen={openModal} onClose={handleCloseModal}></Modal>
    </>
  );
};

export default AddWordBtn;
