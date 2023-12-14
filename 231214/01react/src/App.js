import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "David", password: "1234" } });
  };
  return (
    <div className="App">
      <h1>
        {id} {password}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default App;
