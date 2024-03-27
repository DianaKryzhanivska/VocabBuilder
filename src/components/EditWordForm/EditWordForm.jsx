import React from "react";
import {
  BtnBox,
  CancelBtn,
  InputBox,
  LabelBox,
  SubmitBtn,
} from "./EditWordForm.styled";
import sprite from "../../images/sprite.svg";

const EditWordForm = ({ onClose }) => {
  return (
    <>
      <form>
        <InputBox>
          <div>
            <LabelBox>
              <svg>
                <use href={`${sprite}#ua`} />
              </svg>
              <label htmlFor="ua">Ukrainian</label>
            </LabelBox>
            <input type="text" name="ua" id="ua" placeholder="Трохи, трішки" />
          </div>
          <div>
            <LabelBox>
              <svg>
                <use href={`${sprite}#en`} />
              </svg>
              <label htmlFor="en">English</label>
            </LabelBox>
            <input type="text" name="en" id="en" placeholder="A little bit" />
          </div>
        </InputBox>
        <BtnBox>
          <SubmitBtn type="submit">Save</SubmitBtn>
          <CancelBtn type="button" onClick={onClose}>
            Cancel
          </CancelBtn>
        </BtnBox>
      </form>
    </>
  );
};

export default EditWordForm;
