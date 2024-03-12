import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  & svg {
    width: 36px;
    height: 36px;
  }

  @media only screen and (min-width: 768px) {
    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33em;

  @media only screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.45em;
  }
`;
