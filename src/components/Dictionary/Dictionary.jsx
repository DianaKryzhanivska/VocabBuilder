import React from "react";
import { Container } from "./Dictionary.styled";
import Dashboard from "components/Dashboard/Dashboard";
import WordsTable from "components/WordsTable/WordsTable";

const Dictionary = () => {
  return (
    <>
      <Container>
        <Dashboard />
        <WordsTable />
      </Container>
    </>
  );
};

export default Dictionary;
