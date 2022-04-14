import "App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const EVEN = "even";
  const ODD = "odd";
  const title = document.querySelector(".numText");
  
  // rerendering => state
  function onClickUpButton() {
    setNumber((prev) => prev + 1);
  }

  function onClickDownButton() {
    setNumber((prev) => prev - 1);
  }

  useEffect(() => {
    if (number % 2 === 0) {
      title?.classList.remove(ODD);
      title?.classList.add(EVEN);
    } else {
      title?.classList.remove(EVEN);
      title?.classList.add(ODD);
    }
  }, [number]);

  // useEffect(() => {
  //   console.log(number);
  //   setTimeout(() => {
  //     console.log("hi");
  //   }, 1000);

  //   return () => {
  //     console.log("exit");
  //   };
  // }, [number]);

  return (
    <div>
      <h2 className="numText">{number}</h2>
      <button onClick={onClickUpButton}>up</button>
      <button onClick={onClickDownButton}>down</button>
    </div>
  );
}

export default App;
