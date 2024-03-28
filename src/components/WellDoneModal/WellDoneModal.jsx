import React from "react";
import {
  Img,
  ImgBox,
  List,
  SubTitle,
  Title,
  Wrapper,
} from "./WellDoneModal.styled";
import { useSelector } from "react-redux";
import { selectAnswers } from "../../redux/word/selectors";
import usual from "../../images/mob-book@1x.png";
import retina from "../../images/mob-book@2x.png";
import usualTab from "../../images/tab-book@1x.png";
import retinaTab from "../../images/tab-book@2x.png";
import { useMediaQuery } from "react-responsive";

const WellDoneModal = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const answers = useSelector(selectAnswers);
  const correct = answers.filter((answer) => answer.isDone === true);
  const mistakes = answers.filter((answer) => answer.isDone === false);
  return (
    <>
      <Title>Well done</Title>
      <Wrapper>
        <div>
          <SubTitle>Сorrect answers: </SubTitle>
          <List>
            {correct.map((word) => (
              <li key={word._id}>{word.en}</li>
            ))}
          </List>
        </div>
        <div>
          <SubTitle>Mistakes: </SubTitle>
          <List>
            {mistakes.map((word) => (
              <li key={word._id}>{word.en}</li>
            ))}
          </List>
          <ImgBox>
            {isMobile && (
              <Img srcSet={`${usual} 1x, ${retina} 2x`} alt="illustration" />
            )}
            {isTabletOrDesktop && (
              <Img
                srcSet={`${usualTab} 1x, ${retinaTab} 2x`}
                alt="illustration"
              />
            )}
          </ImgBox>
        </div>
      </Wrapper>
    </>
  );
};

export default WellDoneModal;
