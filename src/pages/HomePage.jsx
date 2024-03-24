import React from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navigate to="/dictionary" />
    </>
  );
};

export default HomePage;
