import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import Title from "./Title";

interface props {
  toDo: string;
  setTodo: (todo: string) => void;
  onAdd: (todo: string) => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.75);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  z-index: 1;
  width: 500px;
  height: 300px;
  padding: 30px;
  margin: 250px auto;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const TodoInput = ({ toDo, setTodo, onAdd }: props) => {
  const onAddTodo = () => {
    if (toDo === "") return;
    onAdd(toDo);
    setTodo("");
  };
  return (
    <Container>
      <Background>
        <Contents>
          <Title label="할 일 추가" />
          <InputContainer>
            <TextInput value={toDo} onChange={setTodo} />
            <Button onClick={onAddTodo} label="추가" color="#304ffe" />
          </InputContainer>
        </Contents>
      </Background>
    </Container>
  );
};

export default TodoInput;
