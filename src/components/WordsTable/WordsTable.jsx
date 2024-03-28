import React, { useEffect } from "react";
import Table from "./Table/Table";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { selectAllWords, selectOwnWords } from "../../redux/word/selectors";
import {
  getAllWordsThunk,
  getOwnWordsThunk,
} from "../../redux/word/operations";
import NotFoundWords from "components/Training/NotFoundWords/NotFoundWords";

const WordsTable = () => {
  const dispatch = useDispatch();
  const own = useSelector(selectOwnWords);
  const allWords = useSelector(selectAllWords);
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    dispatch(
      getOwnWordsThunk({
        keyword: "",
        category: "",
        page: 1,
        limit: 7,
      })
    );
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

  const tableData = own?.length > 0 ? own : allWords;

  return (
    <>
      {own?.length > 0 ? (
        <Table columns={columns} data={tableData} />
      ) : (
        <NotFoundWords />
      )}
    </>
  );
};

export default WordsTable;
