import styled from "styled-components";

export const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    padding: 18px;
    background: #fff;
    width: 704px;
    box-sizing: border-box;
    border-radius: 15px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1240px;
  }
`;

export const TableContainer = styled.div`
  border-radius: 8px 8px 0 0;
  border: none;
  overflow: auto;

  @media only screen and (min-width: 768px) {
    border-radius: 8px;
  }
`;

export const TableItem = styled.table`
  border-radius: 8px 8px 0px 0px;
  border-collapse: collapse;
  width: 100%;

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

  @media only screen and (min-width: 768px) {
    & th,
    td {
      padding: 22px;
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1440px) {
    & th,
    td {
      font-size: 20px;
    }
  }
`;

export const BoxWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ActionsBtnContainer = styled.div`
  position: relative;
`;

export const ActionsBtn = styled.button`
  background: transparent;
`;

export const AddToDictionaryBtn = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;

    & p {
      color: ${({ theme }) => theme.colors.black};
      font-size: 14px;
      font-weight: 500;
      text-wrap: nowrap;
    }
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
`;
