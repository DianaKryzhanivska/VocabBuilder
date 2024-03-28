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

const WellDoneModal = () => {
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
            <Img srcSet={`${usual} 1x, ${retina} 2x`} alt="illustration" />
          </ImgBox>
        </div>
      </Wrapper>
    </>
  );
};

export default WellDoneModal;
