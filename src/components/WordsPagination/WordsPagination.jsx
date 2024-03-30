import React from "react";
import { useMediaQuery } from "react-responsive";
import sprite from "../../images/sprite.svg";
import { Btn, Wrapper } from "./WordsPagination.styled";

const WordsPagination = ({ currentPage, totalPages, onPageChange }) => {
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const handleDecrement = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleIncrement = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const renderPageButtons = () => {
    const buttons = [];
    let maxButtons;

    if (isTabletOrDesktop) {
      maxButtons = totalPages > 4 ? 4 : totalPages;
    } else {
      maxButtons = totalPages > 3 ? 3 : totalPages;
    }

    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxButtons) {
      startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
      endPage = startPage + maxButtons - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(totalPages - maxButtons + 1, 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Btn
          key={`btn-${i}`}
          type="button"
          onClick={() => onPageChange(i)}
          disabled={i === currentPage}
          style={{
            backgroundColor: i === currentPage ? "#85AA9F" : "white",
            color: i === currentPage ? "#FFF" : "#121417",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {i}
        </Btn>
      );
    }

    return buttons;
  };

  return (
    <>
      <Wrapper>
        <Btn type="button" onClick={() => onPageChange(1)}>
          <svg>
            <use href={`${sprite}#first`} />
          </svg>
        </Btn>
        <Btn type="button" onClick={handleDecrement}>
          <svg>
            <use href={`${sprite}#prev`} />
          </svg>
        </Btn>
        {renderPageButtons()}

        <Btn type="button" onClick={handleIncrement}>
          <svg>
            <use href={`${sprite}#next`} />
          </svg>
        </Btn>
        <Btn type="button" onClick={() => onPageChange(totalPages)}>
          <svg>
            <use href={`${sprite}#last`} />
          </svg>
        </Btn>
      </Wrapper>
    </>
  );
};

export default WordsPagination;
