import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface props {
  show: boolean;
  onClick: () => void;
}

const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

const ShowInputButton = ({ show, onClick }: props) => {
  return (
    <Container>
      <Button
        label={show ? "닫기" : "할 일 추가"}
        color={show ? "#304ffe" : undefined}
        onClick={onClick}
      />
    </Container>
  );
};

export default ShowInputButton;
