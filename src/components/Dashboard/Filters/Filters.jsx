import React, { useEffect } from "react";
import sprite from "../../../images/sprite.svg";
import { Form, InputWithIcon } from "./Filters.styled";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../../redux/word/operations";
import { selectCategories } from "../../../redux/word/selectors";

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
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  const options = categories?.map((category) => ({
    value: category,
    label: category,
  }));
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
