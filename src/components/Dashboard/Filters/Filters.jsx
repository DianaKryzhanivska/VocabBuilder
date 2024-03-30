import React, { useEffect, useState } from "react";
import sprite from "../../../images/sprite.svg";
import { Form, InputWithIcon, VerbTypeBox } from "./Filters.styled";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesThunk,
  getOwnWordsThunk,
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

const Filters = ({ pageType }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [searchedKeyWord, setSearchedKeyWord] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isIrregularVerb, setIsIrregularVerb] = useState(false);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (searchedKeyWord.trim() !== "" || selectedCategory) {
      const searchedWords = {
        keyword: searchedKeyWord,
        category: selectedCategory.value,
        page: 1,
        limit: 7,
        ...(selectedCategory.value === "verb" && {
          isIrregular: isIrregularVerb,
        }),
      };
      if (pageType === "dictionary") {
        dispatch(getOwnWordsThunk(searchedWords));
      } else if (pageType === "recommend") {
        dispatch(getSearchWordsThunk(searchedWords));
      }
    }
  }, [searchedKeyWord, selectedCategory, isIrregularVerb, pageType, dispatch]);

  const options = [
    { value: "", label: "All" },
    ...categories?.map((category) => ({
      value: category,
      label: category,
    })),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedWords = {
      keyword: searchedKeyWord,
      category: selectedCategory.value,
      page: 1,
      limit: 7,
    };
    if (pageType === "dictionary") {
      dispatch(getOwnWordsThunk(searchedWords));
    } else if (pageType === "recommend") {
      dispatch(getSearchWordsThunk(searchedWords));
    }
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
        {selectedCategory.value === "verb" && (
          <VerbTypeBox>
            <label htmlFor="regular">
              <input
                type="radio"
                id="regular"
                name="verbType"
                checked={!isIrregularVerb}
                onChange={() => setIsIrregularVerb(false)}
              />
              Regular
            </label>
            <label htmlFor="irregular">
              <input
                type="radio"
                id="irregular"
                name="verbType"
                checked={isIrregularVerb}
                onChange={() => setIsIrregularVerb(true)}
              />
              Irregular
            </label>
          </VerbTypeBox>
        )}
        <button type="submit" style={{ display: "none" }}></button>
      </Form>
    </>
  );
};

export default Filters;
