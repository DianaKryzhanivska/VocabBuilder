import React, { useEffect } from "react";
import Table from "./Table/Table";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { selectAllWords } from "../../redux/word/selectors";
import { getAllWordsThunk } from "../../redux/word/operations";

const WordsTable = () => {
  const dispatch = useDispatch();
  const allWords = useSelector(selectAllWords);
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

  return (
    <>
      <Table columns={columns} data={allWords} />
    </>
  );
};

export default WordsTable;
