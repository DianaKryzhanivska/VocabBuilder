import React, { useEffect, useState } from "react";
import {
  BtnBox,
  CancelBtn,
  Container,
  FormWrapper,
  InputEn,
  LabelBox,
  NextBtn,
  ProgressWrapper,
  SubmitBtn,
  WordBox,
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
import ProgressBar from "components/ProgressBar/ProgressBar";

const Training = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(selectTasks);
  const [translation, setTranslation] = useState("");
  const [answer, setAnswer] = useState({});
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/dictionary");
  };

  const handleChangeTranslation = (e) => {
    const task = tasks[currentIndex];
    const newAnswer = {
      _id: task._id,
      en: task.task === "en" ? e.target.value : task.en,
      ua: task.task === "ua" ? e.target.value : task.ua,
      task: task.task,
    };
    setTranslation(e.target.value);
    setAnswer(newAnswer);
  };

  const handleNextClick = () => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    setTranslation("");
    setAnswer({});
    if (currentIndex < tasks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer) {
      setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    }
    dispatch(postAnswersThunk([...userAnswers, answer]))
      .then(() => {
        setIsRequestSent(true);
        setTranslation("");
        setAnswer({});
        handleOpenModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancelClick = () => {
    navigate("/dictionary");
  };

  return (
    <>
      <Container>
        {tasks.length > 0 ? (
          <>
            <ProgressWrapper>
              <ProgressBar
                pageType="training"
                userAnswers={userAnswers.length}
                totalTasks={tasks.length}
              />
            </ProgressWrapper>
            <FormWrapper>
              <form onSubmit={handleSubmit}>
                <Wrapper>
                  <InputEn>
                    <input
                      type="text"
                      name="word"
                      placeholder="Введіть переклад"
                      value={translation}
                      onChange={handleChangeTranslation}
                    />
                    {tasks[currentIndex]?.task === "en" ? (
                      <LabelBox>
                        <svg>
                          <use href={`${sprite}#en`} />
                        </svg>
                        <label htmlFor="en">English</label>
                      </LabelBox>
                    ) : (
                      <LabelBox>
                        <svg>
                          <use href={`${sprite}#ua`} />
                        </svg>
                        <label htmlFor="ua">Ukrainian</label>
                      </LabelBox>
                    )}
                    {currentIndex !== tasks.length - 1 && (
                      <NextBtn type="button" onClick={handleNextClick}>
                        <p>Next</p>
                        <svg>
                          <use href={`${sprite}#arrow-right`} />
                        </svg>
                      </NextBtn>
                    )}
                  </InputEn>
                  <WordBox>
                    {tasks[currentIndex]?.task === "en" ? (
                      <p>{tasks[currentIndex].ua}</p>
                    ) : (
                      <p>{tasks[currentIndex].en}</p>
                    )}
                    {tasks[currentIndex]?.task === "en" ? (
                      <LabelBox>
                        <svg>
                          <use href={`${sprite}#ua`} />
                        </svg>
                        <label htmlFor="ua">Ukrainian</label>
                      </LabelBox>
                    ) : (
                      <LabelBox>
                        <svg>
                          <use href={`${sprite}#en`} />
                          <label htmlFor="en">English</label>
                        </svg>
                      </LabelBox>
                    )}
                  </WordBox>
                </Wrapper>
                <BtnBox>
                  <SubmitBtn type="submit">Save</SubmitBtn>
                  <CancelBtn type="button" onClick={handleCancelClick}>
                    Cancel
                  </CancelBtn>
                </BtnBox>
              </form>
            </FormWrapper>
          </>
        ) : (
          <NotFoundWords />
        )}
      </Container>
      <Modal isOpen={openModal && isRequestSent} onClose={handleCloseModal}>
        <WellDoneModal onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Training;
