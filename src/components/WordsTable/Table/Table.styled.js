import styled from "styled-components";

export const TableItem = styled.table`
  border-radius: 8px 8px 0px 0px;
  border-collapse: collapse;

  & th,
  td {
    padding: 16px 14px;
    border: 1px solid ${({ theme }) => theme.colors.tableBorder};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    word-wrap: break-word;
  }

  & th {
    background: ${({ theme }) => theme.colors.lightGreen};
    font-size: 16px;
  }

  & td {
    background: ${({ theme }) => theme.colors.white};
    font-size: 14px;
  }
`;

export const ActionsBtn = styled.button`
  background: transparent;
`;
