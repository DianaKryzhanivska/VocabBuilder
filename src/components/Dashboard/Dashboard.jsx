import React from "react";
import Filters from "./Filters/Filters";
import Statistics from "./Statistics/Statistics";
import AddWordBtn from "./AddWordBtn/AddWordBtn";
import { DeskWrapper, Wrapper } from "./Dashboard.styled";

const Dashboard = ({ pageType }) => {
  return (
    <>
      <DeskWrapper>
        <Filters pageType={pageType} />
        <Wrapper>
          <Statistics />
          <AddWordBtn />
        </Wrapper>
      </DeskWrapper>
    </>
  );
};

export default Dashboard;
