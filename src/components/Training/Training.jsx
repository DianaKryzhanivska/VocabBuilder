import React, { useEffect, useState } from "react";
import {
  Box,
  BtnBox,
  CancelBtn,
  Container,
  FormWrapper,
  InputBox,
  LabelBox,
  NextBtn,
  SubmitBtn,
  Word,
  Wrapper,
} from "./Training.styled";
import sprite from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { getTasksThunk, postAnswersThunk } from "../../redux/word/operations";
import { selectTasks } from "../../redux/word/selectors";
import Modal from "../Modal/Modal";
import WellDoneModal from "components/WellDoneModal/WellDoneModal";

const Training = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [translation, setTranslation] = useState("");
  const [answer, setAnswer] = useState({});
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  console.log("tasks", tasks);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeTranslation = (e) => {
    const task = tasks[currentIndex];
    console.log(task);
    setTranslation(e.target.value);
    setAnswer({
      _id: task._id,
      en: e.target.value,
      ua: task.ua,
      task: task.task,
    });
  };

  const handleNextClick = () => {
    setUserAnswers([...userAnswers, answer]);
    setTranslation("");
    setAnswer({});
    if (currentIndex < tasks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userAnswers", userAnswers);
    dispatch(postAnswersThunk(userAnswers));
    setTranslation("");
    handleOpenModal();
  };

  return (
    <>
      <Container>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <Wrapper>
              <InputBox>
                <input
                  type="text"
                  name="ua"
                  placeholder="Введіть переклад"
                  value={translation}
                  onChange={handleChangeTranslation}
                />
                <LabelBox>
                  <svg>
                    <use href={`${sprite}#en`} />
                  </svg>
                  <label htmlFor="ua">English</label>
                </LabelBox>
                {currentIndex !== tasks.length - 1 && (
                  <NextBtn type="button" onClick={handleNextClick}>
                    <p>Next</p>
                    <svg>
                      <use href={`${sprite}#arrow-right`} />
                    </svg>
                  </NextBtn>
                )}
              </InputBox>
              <Box>
                <Word>{tasks[currentIndex]?.ua}</Word>
                <LabelBox>
                  <svg>
                    <use href={`${sprite}#ua`} />
                  </svg>
                  <label htmlFor="ua">Ukrainian</label>
                </LabelBox>
              </Box>
            </Wrapper>
            <BtnBox>
              <SubmitBtn type="submit">Save</SubmitBtn>
              <CancelBtn type="button">Cancel</CancelBtn>
            </BtnBox>
          </form>
        </FormWrapper>
      </Container>
      <Modal isOpen={openModal} onClose={handleCloseModal}>
        <WellDoneModal onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Training;
