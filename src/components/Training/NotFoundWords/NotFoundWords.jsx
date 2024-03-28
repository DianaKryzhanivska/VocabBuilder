import React, { useState } from "react";
import {
  AddWordBtn,
  BtnBox,
  CancelBtn,
  Container,
  ImgBox,
  Text,
  TextBox,
  Title,
  Wrapper,
} from "./NotFoundWords.styled";
import usual from "../../../images/mob-report@1x.png";
import retina from "../../../images/mob-report@2x.png";
import usualTab from "../../../images/tab-report@1x.png";
import retinaTab from "../../../images/tab-report@2x.png";
import { useNavigate } from "react-router-dom";
import Modal from "components/Modal/Modal";
import AddWordForm from "components/AddWordForm/AddWordForm";
import { useMediaQuery } from "react-responsive";

const NotFoundWords = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleAddWordClick = async () => {
    handleOpenModal();
    // navigate("/dictionary");
  };
  const handleCancelClick = () => {
    navigate("/dictionary");
  };
  return (
    <>
      <Container>
        <Wrapper>
          <ImgBox>
            {isMobile && (
              <img srcSet={`${usual} 1x, ${retina} 2x`} alt="illustration" />
            )}
            {isTablet && (
              <img
                srcSet={`${usualTab} 1x, ${retinaTab} 2x`}
                alt="illustration"
              />
            )}
          </ImgBox>
          <TextBox>
            <Title>You don't have a single word to learn right now. </Title>
            <Text>
              Please create or add a word to start the workout. We want to
              improve your vocabulary and develop your knowledge, so please
              share the words you are interested in adding to your study.
            </Text>
            <BtnBox>
              <AddWordBtn type="button" onClick={handleAddWordClick}>
                Add word
              </AddWordBtn>
              <CancelBtn onClick={handleCancelClick} type="button">
                Cancel
              </CancelBtn>
            </BtnBox>
          </TextBox>
        </Wrapper>
      </Container>

      <Modal isOpen={openModal} onClose={handleCloseModal}>
        <AddWordForm onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default NotFoundWords;
