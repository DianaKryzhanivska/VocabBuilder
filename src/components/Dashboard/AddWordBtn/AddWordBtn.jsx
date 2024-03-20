import React from "react";
import sprite from "../../../images/sprite.svg";
import { Btn, TrainingLink, Wrapper } from "./AddWordBtn.styled";
import { NavLink } from "react-router-dom";

const AddWordBtn = () => {
  return (
    <>
      <Wrapper>
        <Btn type="button">
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
    </>
  );
};

export default AddWordBtn;
