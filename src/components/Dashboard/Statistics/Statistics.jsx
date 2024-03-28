import React, { useEffect } from "react";
import { Wrapper } from "./Statistics.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectStatistics } from "../../../redux/word/selectors";
import { getStatisticsThunk } from "../../../redux/word/operations";

const Statistics = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);

  useEffect(() => {
    dispatch(getStatisticsThunk());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <p>To study:</p>
        <span>{statistics}</span>
      </Wrapper>
    </>
  );
};

export default Statistics;
