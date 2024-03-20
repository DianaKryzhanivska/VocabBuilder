import React from "react";
import sprite from "../../../images/sprite.svg";
import { Form, InputWithIcon } from "./Filters.styled";
import Select from "react-select";

const options = [
  { value: "Verb", label: "Verb" },
  { value: "Participle", label: "Participle" },
  { value: "Noun", label: "Noun" },
  { value: "Adjective", label: "Adjective" },
  { value: "Pronoun", label: "Pronoun" },
  { value: "Numerals", label: "Numerals" },
  { value: "Adverb", label: "Adverb" },
  { value: "Preposition", label: "Preposition" },
  { value: "Conjuction", label: "Conjuction" },
  { value: "Phrasal verb", label: "Phrasal verb" },
  { value: "Functional phrase", label: "Functional phrase" },
];

const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "12px",
    border: "1px solid rgba(18, 20, 23, 0.10)",
    height: "48px",
    background: "#F8F8F8",
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    paddingLeft: "24px",
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

const Filters = () => {
  return (
    <>
      <Form>
        <InputWithIcon>
          <input type="text" placeholder="Find the word" />
          <svg>
            <use href={`${sprite}#search`} />
          </svg>
        </InputWithIcon>
        <Select
          options={options}
          styles={customStyles}
          placeholder="Categories"
        />
      </Form>
    </>
  );
};

export default Filters;
