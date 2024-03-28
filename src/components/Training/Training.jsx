import React, { useEffect, useState } from "react";
import {
  BtnBox,
  CancelBtn,
  Container,
  FormWrapper,
  InputEn,
  InputUa,
  LabelBox,
  NextBtn,
  SubmitBtn,
  Wrapper,
} from "./Training.styled";
import sprite from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { getTasksThunk, postAnswersThunk } from "../../redux/word/operations";
import { selectTasks } from "../../redux/word/selectors";
import Modal from "../Modal/Modal";
import WellDoneModal from "components/WellDoneModal/WellDoneModal";
import { useNavigate } from "react-router-dom";
import NotFoundWords from "./NotFoundWords/NotFoundWords";

const Training = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(selectTasks);
  const [translationEn, setTranslationEn] = useState("");
  const [translationUa, setTranslationUa] = useState("");
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
    navigate("/dictionary");
  };

  const handleChangeTranslationEn = (e) => {
    const task = tasks[currentIndex];
    console.log(task);
    setTranslationEn(e.target.value);
    setAnswer({
      _id: task._id,
      en: e.target.value,
      ua: task.ua,
      task: task.task,
    });
  };

  const handleChangeTranslationUa = (e) => {
    const task = tasks[currentIndex];
    console.log(task);
    setTranslationUa(e.target.value);
    setAnswer({
      _id: task._id,
      en: task.en,
      ua: e.target.value,
      task: task.task,
    });
  };

  const handleNextClick = () => {
    setUserAnswers([...userAnswers, answer]);
    setTranslationEn("");
    setTranslationUa("");
    setAnswer({});
    if (currentIndex < tasks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userAnswers", userAnswers);
    dispatch(postAnswersThunk(userAnswers));
    setTranslationEn("");
    setTranslationUa("");
    handleOpenModal();
  };

  const handleCancelClick = () => {
    navigate("/dictionary");
  };

  return (
    <>
      <Container>
        {tasks.length > 0 ? (
          <FormWrapper>
            <form onSubmit={handleSubmit}>
              <Wrapper>
                <InputEn>
                  <input
                    type="text"
                    name="en"
                    placeholder={tasks[currentIndex]?.en}
                    value={translationEn}
                    onChange={handleChangeTranslationEn}
                  />
                  <LabelBox>
                    <svg>
                      <use href={`${sprite}#en`} />
                    </svg>
                    <label htmlFor="en">English</label>
                  </LabelBox>
                  {currentIndex !== tasks.length - 1 && (
                    <NextBtn type="button" onClick={handleNextClick}>
                      <p>Next</p>
                      <svg>
                        <use href={`${sprite}#arrow-right`} />
                      </svg>
                    </NextBtn>
                  )}
                </InputEn>
                <InputUa>
                  <input
                    type="text"
                    name="ua"
                    placeholder={tasks[currentIndex]?.ua}
                    value={translationUa}
                    onChange={handleChangeTranslationUa}
                  />
                  <LabelBox>
                    <svg>
                      <use href={`${sprite}#ua`} />
                    </svg>
                    <label htmlFor="ua">Ukrainian</label>
                  </LabelBox>
                </InputUa>
              </Wrapper>
              <BtnBox>
                <SubmitBtn type="submit">Save</SubmitBtn>
                <CancelBtn type="button" onClick={handleCancelClick}>
                  Cancel
                </CancelBtn>
              </BtnBox>
            </form>
          </FormWrapper>
        ) : (
          <NotFoundWords />
        )}
      </Container>
      <Modal isOpen={openModal} onClose={handleCloseModal}>
        <WellDoneModal onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Training;
