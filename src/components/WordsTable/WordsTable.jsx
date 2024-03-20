import React from "react";

import data from "../../../src/data.json";
import Table from "./Table/Table";
import { useMediaQuery } from "react-responsive";

const WordsTable = () => {
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const columns = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Progress", accessor: "progress" },
  ];

  if (isTabletOrDesktop) {
    columns.splice(2, 0, { Header: "Category", accessor: "category" });
  }

  const words = data.results;

  return (
    <>
      <Table columns={columns} data={words} />
    </>
  );
};

export default WordsTable;
