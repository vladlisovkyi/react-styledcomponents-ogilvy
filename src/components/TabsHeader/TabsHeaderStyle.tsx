import { styled } from "styled-components";

export const StyledTabsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.15rem;
  margin-top: 30px;
  flex-wrap: wrap;

  @media screen and (max-width: 520px) {
    gap: 1.25rem;
  }
`;

export const StyledTabHeader = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 0.35rem 0;
  position: relative;
  transition: all 150ms ease-in;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    transition: all 150ms ease-in;
    opacity: 0;
  }
  &.active-tab {
    color: var(--btn-red);

    &::before {
      opacity: 1;
      background: var(--btn-red);
    }
  }
`;
