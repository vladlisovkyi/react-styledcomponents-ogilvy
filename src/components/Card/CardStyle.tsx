import { styled } from "styled-components";
import { GraphItem } from "../../data";

export const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const StyledCard = styled.div`
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--text-black-color);
    text-align: center;
    margin-top: 20px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
    text-align: center;
    max-width: 440px;
    text-wrap: balance;
    margin-bottom: 40px;
  }
`;

export const StyledGraphItem = styled.div<GraphItem>`
  margin-bottom: 30px;
  width: 100%;
  & > .line {
    position: relative;
    width: 100%;
    height: 6px;
    background: #f4f4f9;
    border-radius: 3px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 3px;
      height: 6px;
      width: ${(props) => props.percent}%;
      background: var(--btn-red);
    }
  }

  & > .info {
    margin-top: 7px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;
    color: ${(props) => (props.percent > 0 ? "var(--btn-red)" : "#D6D7E1")};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    @media screen and (max-width: 520px) {
      font-size: 14px;
    }
  }
`;
