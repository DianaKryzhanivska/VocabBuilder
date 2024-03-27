import React, { useState } from "react";
import {
  BtnBox,
  CancelBtn,
  InputBox,
  Item,
  LabelBox,
  SubmitBtn,
} from "./EditWordForm.styled";
import sprite from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { editWordThunk } from "../../redux/word/operations";

const EditWordForm = ({ onClose, wordData }) => {
  console.log("wordData: ", wordData);
  const dispatch = useDispatch();

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
      id: wordData._id,
      body: {
        en: wordEn,
        ua: wordUa,
        category: wordData.category,
      },
    };
    console.log("editFormData: ", editFormData);
    dispatch(editWordThunk(editFormData));
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputBox>
          <Item>
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
              onChange={handleUaChange}
            />
          </Item>
          <Item>
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
          </Item>
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
