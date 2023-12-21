import React, { useState } from "react";
import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";

interface props {
  toDo: string;
  setTodo: (todo: string) => void;
  onAdd: () => void;
}

const InputContainer = ({ toDo, setTodo, onAdd }: props) => {
  const [showToDoInput, setShowToDoInput] = useState(true);
  return (
    <div>
      {showToDoInput && (
        <TodoInput toDo={toDo} setTodo={setTodo} onAdd={onAdd} />
      )}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </div>
  );
};

export default InputContainer;
