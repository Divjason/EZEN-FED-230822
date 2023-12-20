import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(event.currentTarget.value);
  };
  return (
    <div>
      <form>
        <input
          value={value}
          type="text"
          placeholder="username"
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default App;
