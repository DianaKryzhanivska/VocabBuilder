import styled from "styled-components";

export const NavBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;

  & a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 500;
  }

  & a.active {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    padding: 12px 20px;
    border-radius: 15px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;

    & a {
      color: ${({ theme }) => theme.colors.black};
    }

    & a.active {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.green};
    }
  }
`;
