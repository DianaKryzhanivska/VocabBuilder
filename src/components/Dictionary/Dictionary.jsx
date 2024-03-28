import React from "react";
import { Container } from "./Dictionary.styled";
import Dashboard from "components/Dashboard/Dashboard";
import WordsTable from "components/WordsTable/WordsTable";

const Dictionary = () => {
  return (
    <>
      <Container>
        <Dashboard pageType="dictionary" />
        <WordsTable pageType="dictionary" />
      </Container>
    </>
  );
};

export default Dictionary;
