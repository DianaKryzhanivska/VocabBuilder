import React from "react";

import data from "../../../src/data.json";
import Table from "./Table/Table";
console.log(data.results);

const WordsTable = () => {
  const columns = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Progress", accessor: "progress" },
  ];
  const words = data.results;

  return (
    <>
      <Table columns={columns} data={words} />
    </>
  );
};

export default WordsTable;
