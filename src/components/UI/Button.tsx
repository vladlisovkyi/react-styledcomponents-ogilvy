import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 6px 15px;
  border-radius: 2px;
  background: var(--btn-red);
  transition: background 150ms ease-in;
  color: #fff;
  font-family: "Neutrif Pro";
  font-weight: 500;
  cursor: pointer;
  min-width: 128px;

  &:hover {
    background: var(--btn-red-hover);
  }

  &.mt-40 {
    margin-top: 40px;
  }

  @media screen and (max-width: 520px) {
    min-width: none;
  }
`;

interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }) => {
  return <StyledButton className={className}>{label}</StyledButton>;
};

export default Button;
