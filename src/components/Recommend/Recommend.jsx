import Dashboard from "components/Dashboard/Dashboard";
import React from "react";
import { Container } from "./Recommend.styled";
import WordsTable from "components/WordsTable/WordsTable";

const Recommend = () => {
  return (
    <>
      <Container>
        <Dashboard pageType="recommend" />
        <WordsTable pageType="recommend" />
      </Container>
    </>
  );
};

export default Recommend;
