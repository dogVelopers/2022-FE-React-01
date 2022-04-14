import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState<number>(0);
  function onClickUpButton() {
    setNum((prev) => prev + 1);
  }
  function onClickDownButton() {
    setNum((prev) => prev - 1);
  }

  return (
    <div>
      <h1>DogVelopers 22</h1>

      <h2 className={num % 2 == 0 ? "changeBlack" : "changeRed"}>{num}</h2>
      <button onClick={onClickUpButton}>up</button>
      <button onClick={onClickDownButton}>Down</button>
    </div>
  );
}

export default App;
