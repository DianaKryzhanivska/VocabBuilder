import React from "react";
import Filters from "./Filters/Filters";
import Statistics from "./Statistics/Statistics";
import AddWordBtn from "./AddWordBtn/AddWordBtn";
import { DeskWrapper, Wrapper } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <>
      <DeskWrapper>
        <Filters />
        <Wrapper>
          <Statistics />
          <AddWordBtn />
        </Wrapper>
      </DeskWrapper>
    </>
  );
};

export default Dashboard;
