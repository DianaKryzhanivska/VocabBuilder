import React, { useState } from "react";
import {
  BtnBox,
  CancelBtn,
  InputBox,
  LabelBox,
  SubmitBtn,
} from "./EditWordForm.styled";
import sprite from "../../images/sprite.svg";

const EditWordForm = ({ onClose, wordData }) => {
  console.log("wordData: ", wordData);
  const [wordUa, setWordUa] = useState("");
  const [wordEn, setWordEn] = useState("");

  const handleUaChange = (e) => {
    setWordUa(e.target.value);
  };

  const handleEnChange = (e) => {
    setWordEn(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editFormData = {
      en: wordEn,
      ua: wordUa,
      category: wordData.category,
    };
    console.log("editFormData: ", editFormData);
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputBox>
          <div>
            <LabelBox>
              <svg>
                <use href={`${sprite}#ua`} />
              </svg>
              <label htmlFor="ua">Ukrainian</label>
            </LabelBox>
            <input
              type="text"
              name="ua"
              id="ua"
              placeholder={wordData.ua}
              // value={wordData.ua}
              onChange={handleUaChange}
            />
          </div>
          <div>
            <LabelBox>
              <svg>
                <use href={`${sprite}#en`} />
              </svg>
              <label htmlFor="en">English</label>
            </LabelBox>
            <input
              type="text"
              name="en"
              id="en"
              placeholder={wordData.en}
              // value={wordData.en}
              onChange={handleEnChange}
            />
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
