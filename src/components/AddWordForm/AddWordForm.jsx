import React from "react";
import {
  BtnBox,
  CancelBtn,
  Form,
  InputBox,
  LabelBox,
  SubmitBtn,
  Text,
  Title,
} from "./AddWordForm.styled";
import Select from "react-select";
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/word/selectors";
import sprite from "../../images/sprite.svg";

const customStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    marginBottom: "32px",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "15px",
    border: "1px solid #D1D5DB",
    height: "48px",
    backgroundColor: "transparent",
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    paddingLeft: "24px",
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: "#FCFCFC",
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: "#FCFCFC",
    textTransform: "capitalize",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    textTransform: "capitalize",
  }),
  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: "none",
  }),
  indicatorsContainer: (baseStyles, state) => ({
    ...baseStyles,
    paddingRight: "12px",
  }),
  indicatorContainer: (baseStyles, state) => ({
    ...baseStyles,
    padding: 0,
  }),
};

const AddWordForm = ({ onClose }) => {
  const categories = useSelector(selectCategories);
  const options = categories?.map((category) => ({
    value: category,
    label: category,
  }));
  return (
    <>
      <Title>Add word</Title>
      <Text>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </Text>
      <Form>
        <Select options={options} styles={customStyles} />
        <InputBox>
          <div>
            <LabelBox>
              <svg>
                <use href={`${sprite}#ua`} />
              </svg>
              <label htmlFor="ua">Ukrainian</label>
            </LabelBox>
            <input type="text" id="ua" placeholder="Працювати" />
          </div>
          <div>
            <LabelBox>
              <svg>
                <use href={`${sprite}#en`} />
              </svg>
              <label htmlFor="en">English</label>
            </LabelBox>
            <input type="text" id="en" placeholder="Work" />
          </div>
        </InputBox>
        <BtnBox>
          <SubmitBtn type="submit">Add</SubmitBtn>
          <CancelBtn type="button" onClick={onClose}>
            Cancel
          </CancelBtn>
        </BtnBox>
      </Form>
    </>
  );
};

export default AddWordForm;
