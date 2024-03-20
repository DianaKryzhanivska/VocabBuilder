import React from "react";
import Filters from "./Filters/Filters";
import Statistics from "./Statistics/Statistics";
import AddWordBtn from "./AddWordBtn/AddWordBtn";
import { Wrapper } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <>
      <Filters />
      <Wrapper>
        <Statistics />
        <AddWordBtn />
      </Wrapper>
    </>
  );
};

export default Dashboard;
