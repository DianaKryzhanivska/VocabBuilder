import React from "react";
import { useMediaQuery } from "react-responsive";
import sprite from "../../images/sprite.svg";
import { Btn, Wrapper } from "./WordsPagination.styled";

const WordsPagination = ({
  currentPage,
  totalPages,
  perPage,
  onPageChange,
}) => {
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
    const maxButtons = isTabletOrDesktop ? 3 : 2;

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <Btn
            key={`btn-${i}`}
            type="button"
            onClick={() => onPageChange(i)}
            disabled={i === currentPage}
          >
            {i}
          </Btn>
        );
      }
    } else {
      for (let i = 1; i <= maxButtons; i++) {
        buttons.push(
          <Btn
            key={`btn-${i}`}
            type="button"
            onClick={() => onPageChange(i)}
            disabled={i === currentPage}
          >
            {i}
          </Btn>
        );
      }

      if (totalPages > maxButtons + 2) {
        buttons.push(
          <Btn key="dots" type="button">
            <svg>
              <use href={`${sprite}#dots`} />
            </svg>
          </Btn>
        );
      }

      for (let i = totalPages - maxButtons + 2; i <= totalPages; i++) {
        buttons.push(
          <Btn
            key={`btn-${i}`}
            type="button"
            onClick={() => onPageChange(i)}
            disabled={i === currentPage}
          >
            {i}
          </Btn>
        );
      }
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
