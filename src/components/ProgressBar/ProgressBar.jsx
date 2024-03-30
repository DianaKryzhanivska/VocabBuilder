import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "@mui/material/styles";
import { TrainingProgress, Wrapper } from "./ProgressBar.styled";
import { useMediaQuery } from "react-responsive";

const ProgressBar = ({ progress, pageType, userAnswers, totalTasks }) => {
  const trainingProgress = Math.round((userAnswers / totalTasks) * 100);

  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isDictionaryPage = pageType === "dictionary";
  const isTrainingPage = pageType === "training";

  const progressData = isDictionaryPage ? progress : trainingProgress;
  return (
    <>
      <Wrapper>
        {isTabletOrDesktop && isDictionaryPage && <p>{`${progressData}%`}</p>}
        {isTrainingPage && (
          <TrainingProgress>{trainingProgress}</TrainingProgress>
        )}
        <CircularProgress
          variant="determinate"
          value={progressData}
          sx={{
            width: "24px",
            height: "24px",
            color: "#2BD627",
            borderRadius: "50%",
            border: "5px solid #D4F8D3",
          }}
        />
      </Wrapper>
    </>
  );
};

export default ProgressBar;
