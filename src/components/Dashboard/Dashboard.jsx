import React from "react";
import Filters from "./Filters/Filters";
import Statistics from "./Statistics/Statistics";
import AddWordBtn from "./AddWordBtn/AddWordBtn";

const Dashboard = () => {
  return (
    <>
      <Filters />
      <Statistics />
      <AddWordBtn />
    </>
  );
};

export default Dashboard;
