import React from "react";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  max-width: 1210px;
  padding: 0 15px;
  margin: 0 auto;
  min-height: 100%;
`;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
