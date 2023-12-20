import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import DataView from "./component/DataView";
import TodoInput from "./component/TodoInput";
import ShowInputButton from "./component/ShowInputButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #eee;
`;

const mockup = ["리액트 공부하기", "운동하기", "책 읽기"];

function App() {
  const [toDoList, setTodoList] = useState(mockup);
  const [toDo, setTodo] = useState("");
  const [showToDoInput, setShowToDoInput] = useState(true);
  const onDelete = (todo: string) => {
    setTodoList(toDoList.filter((item) => item !== todo));
  };
  const onAdd = (todo: string) => {
    if (toDo === "") return;
    setTodoList([...toDoList, toDo]);
    setTodo("");
  };
  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {showToDoInput && <TodoInput toDo={toDo} setTodo={setTodo} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </Container>
  );
}

export default App;
