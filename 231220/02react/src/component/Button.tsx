import React from "react";
import styled from "styled-components";

interface props {
  label: string;
  onClick?: () => void;
  color?: string;
}

const Container = styled.button`
  cursor: pointer;
  color: #fff;
  background: ${(props) => props.color};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Button = ({ label, onClick, color = "#ff5722" }: props) => {
  return (
    <Container onClick={onClick} color={color}>
      {label}
    </Container>
  );
};

export default Button;
