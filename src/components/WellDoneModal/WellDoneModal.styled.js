import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.17em;
  letter-spacing: -0.48px;
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.modalSubTitle};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & li {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;
  }
`;

export const ImgBox = styled.div`
  position: relative;
  margin-top: 51px;
  width: 152px;
  height: 121px;
`;

export const Img = styled.img`
  position: absolute;
  right: -4px;
  bottom: -4px;
`;
