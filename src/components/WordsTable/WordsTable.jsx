import React, { useEffect } from "react";
import Table from "./Table/Table";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllWords,
  selectFilteredWords,
} from "../../redux/word/selectors";
import { getAllWordsThunk } from "../../redux/word/operations";

const WordsTable = () => {
  const dispatch = useDispatch();
  const allWords = useSelector(selectAllWords);
  const filteredWords = useSelector(selectFilteredWords);
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    dispatch(getAllWordsThunk());
  }, [dispatch]);

  const columns = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Progress", accessor: "progress" },
  ];

  if (isTabletOrDesktop) {
    columns.splice(2, 0, { Header: "Category", accessor: "category" });
  }

  const tableData = filteredWords.length > 0 ? filteredWords : allWords;

  return (
    <>
      <Table columns={columns} data={tableData} />
    </>
  );
};

export default WordsTable;
