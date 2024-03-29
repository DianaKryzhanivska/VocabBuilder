import React, { useEffect } from "react";
import Table from "./Table/Table";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { selectAllWords, selectOwnWords } from "../../redux/word/selectors";
import {
  getOwnWordsThunk,
  getSearchWordsThunk,
} from "../../redux/word/operations";
import NotFoundWords from "components/Training/NotFoundWords/NotFoundWords";

const WordsTable = ({ pageType }) => {
  const dispatch = useDispatch();
  const own = useSelector(selectOwnWords);
  const allWords = useSelector(selectAllWords);
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (pageType === "dictionary") {
      dispatch(
        getOwnWordsThunk({
          keyword: "",
          category: "",
          page: 1,
          limit: 7,
        })
      );
    } else if (pageType === "recommend") {
      dispatch(
        getSearchWordsThunk({
          keyword: "",
          category: "",
          page: 1,
          limit: 7,
        })
      );
    }
  }, [pageType, dispatch]);

  const columns = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Progress", accessor: "progress" },
  ];

  if (isTabletOrDesktop) {
    columns.splice(2, 0, { Header: "Category", accessor: "category" });
  }

  const tableData = pageType === "dictionary" ? own : allWords;

  return (
    <>
      {tableData?.length > 0 ? (
        <Table pageType={pageType} columns={columns} data={tableData} />
      ) : (
        <NotFoundWords />
      )}
    </>
  );
};

export default WordsTable;
