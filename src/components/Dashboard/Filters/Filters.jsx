import React, { useEffect, useState } from "react";
import sprite from "../../../images/sprite.svg";
import { Form, InputWithIcon } from "./Filters.styled";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesThunk,
  getSearchWordsThunk,
} from "../../../redux/word/operations";
import { selectCategories } from "../../../redux/word/selectors";

const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "12px",
    border: "1px solid #D1D5DB",
    height: "48px",
    background: "#F8F8F8",
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    paddingLeft: "24px",
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
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

const Filters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [searchedKeyWord, setSearchedKeyWord] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  const options = categories?.map((category) => ({
    value: category,
    label: category,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedWords = {
      keyword: searchedKeyWord,
      category: selectedCategory.value,
      page: 1,
      limit: 25,
    };
    dispatch(getSearchWordsThunk(searchedWords));
    setSearchedKeyWord("");
    setSelectedCategory("");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputWithIcon>
          <input
            type="text"
            placeholder="Find the word"
            onChange={(e) => setSearchedKeyWord(e.target.value)}
            value={searchedKeyWord}
          />
          <svg onClick={handleSubmit}>
            <use href={`${sprite}#search`} />
          </svg>
        </InputWithIcon>
        <Select
          options={options}
          styles={customStyles}
          placeholder="Categories"
          onChange={setSelectedCategory}
          value={selectedCategory}
        />
        <button type="submit" style={{ display: "none" }}></button>
      </Form>
    </>
  );
};

export default Filters;
