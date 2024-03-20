import React from "react";
import { useTable } from "react-table";
import { ActionsBtn, TableItem } from "./Table.styled";
import sprite from "../../../images/sprite.svg";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <TableItem {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                  <ActionsBtn type="button">
                    <svg width={12} height={22}>
                      <use href={`${sprite}#dots`} />
                    </svg>
                  </ActionsBtn>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableItem>
    </>
  );
};

export default Table;
