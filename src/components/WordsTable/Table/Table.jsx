import React, { useState } from "react";
import { useTable } from "react-table";
import {
  ActionsBtn,
  ActionsBtnContainer,
  BoxWithIcon,
  TableContainer,
  TableItem,
  Wrapper,
} from "./Table.styled";
import sprite from "../../../images/sprite.svg";
import { useMediaQuery } from "react-responsive";
import ActionsModal from "components/ActionsModal/ActionsModal";

const Table = ({ columns, data }) => {
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const [openActionsModal, setOpenActionsModal] = useState(false);

  const handleOpenActionsModal = () => {
    setOpenActionsModal(true);
  };

  const handleCloseActionsModal = () => {
    setOpenActionsModal(false);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <Wrapper>
        <TableContainer>
          <TableItem {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      <BoxWithIcon>
                        {column.render("Header")}
                        {isTabletOrDesktop && column.Header === "Word" && (
                          <svg width={28} height={28}>
                            <use href={`${sprite}#en`} />
                          </svg>
                        )}
                        {isTabletOrDesktop &&
                          column.Header === "Translation" && (
                            <svg width={28} height={28}>
                              <use href={`${sprite}#ua`} />
                            </svg>
                          )}
                      </BoxWithIcon>
                    </th>
                  ))}
                  <th></th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                    <td>
                      <ActionsBtnContainer>
                        <ActionsBtn
                          type="button"
                          onClick={handleOpenActionsModal}
                        >
                          <svg width={12} height={22}>
                            <use href={`${sprite}#dots`} />
                          </svg>
                        </ActionsBtn>
                        <ActionsModal
                          isOpen={openActionsModal}
                          onClose={handleCloseActionsModal}
                        />
                      </ActionsBtnContainer>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TableItem>
        </TableContainer>
      </Wrapper>
    </>
  );
};

export default Table;
