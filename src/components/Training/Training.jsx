import React, { useEffect } from "react";
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
import { getTasksThunk } from "../../redux/word/operations";
import { selectTasks } from "../../redux/word/selectors";

const Training = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  console.log("tasks", tasks);

  return (
    <>
      <Container>
        <FormWrapper>
          <form>
            <Wrapper>
              <InputBox>
                <input type="text" name="ua" placeholder="Введіть переклад" />
                <LabelBox>
                  <svg>
                    <use href={`${sprite}#ua`} />
                  </svg>
                  <label htmlFor="ua">Ukrainian</label>
                </LabelBox>
                <NextBtn type="button">
                  <p>Next</p>
                  <svg>
                    <use href={`${sprite}#arrow-right`} />
                  </svg>
                </NextBtn>
              </InputBox>
              <Box>
                <Word>Word</Word>
                <LabelBox>
                  <svg>
                    <use href={`${sprite}#en`} />
                  </svg>
                  <label htmlFor="ua">English</label>
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
    </>
  );
};

export default Training;
