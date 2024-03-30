import React, { useEffect, useState } from "react";
import Table from "./Table/Table";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllWords,
  selectOwnWords,
  selectTotalPages,
} from "../../redux/word/selectors";
import {
  getOwnWordsThunk,
  getSearchWordsThunk,
} from "../../redux/word/operations";
import NotFoundWords from "components/Training/NotFoundWords/NotFoundWords";
import WordsPagination from "components/WordsPagination/WordsPagination";

const WordsTable = ({ pageType }) => {
  const dispatch = useDispatch();
  const own = useSelector(selectOwnWords);
  const allWords = useSelector(selectAllWords);
  const totalPages = useSelector(selectTotalPages);
  const [currentPage, setCurrentPage] = useState(1);

  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (pageType === "dictionary") {
      dispatch(
        getOwnWordsThunk({
          keyword: "",
          category: "",
          page: currentPage,
          limit: 7,
        })
      );
    } else if (pageType === "recommend") {
      dispatch(
        getSearchWordsThunk({
          keyword: "",
          category: "",
          page: currentPage,
          limit: 7,
        })
      );
    }
  }, [pageType, dispatch, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
  ];

  if (pageType === "dictionary") {
    columns.splice(2, 0, { Header: "Progress", accessor: "progress" });
  }

  if (pageType === "dictionary" && isTabletOrDesktop) {
    columns.splice(2, 0, { Header: "Category", accessor: "category" });
  }

  if (pageType === "recommend") {
    columns.splice(3, 0, { Header: "Category", accessor: "category" });
  }

  const tableData = pageType === "dictionary" ? own : allWords;

  return (
    <>
      {tableData?.length > 0 ? (
        <>
          <Table pageType={pageType} columns={columns} data={tableData} />
          {totalPages > 1 && (
            <WordsPagination
              onPageChange={handlePageChange}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </>
      ) : (
        <NotFoundWords />
      )}
    </>
  );
};

export default WordsTable;
