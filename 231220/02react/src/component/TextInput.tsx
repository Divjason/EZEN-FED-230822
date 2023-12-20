import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

interface props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: props) => {
  return (
    <Input
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
  );
};

export default TextInput;
