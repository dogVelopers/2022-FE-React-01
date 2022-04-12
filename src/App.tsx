import "./App.css";
import Person from "./components/Person";

import {useState, useEffect, useRef} from "react";

function App() {
  const [number, setNumber] = useState<number>(0);

  function onClickUpButton(){
    setNumber((prev)=> prev+1);
  }
  function onClickDownButton(){
    setNumber((prev)=>prev-1);
  }

  // useEffect(()=>{
  //     console.log(buttonRef.current);
  //     if(!buttonRef.current) return;
  //     buttonRef.current.addEventListener("click", ()=>{console.log("down")})
  //     return () => {};
  //   }, []);

  //   const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <h1>DogVelopers 22</h1>
      <h2 className="numberTitle">{number}</h2>
      <button onClick={onClickUpButton}>up</button>
      <button onClick={onClickDownButton}>down</button>
      {/* <button ref={buttonRef}>down</button> */}

      {/* 짝수면 빨강색 */}
      {
        number % 2 ==0
        ? document.querySelector('.numberTitle')?.classList.add("red")
        :  document.querySelector('.numberTitle')?.classList.remove("red")
      }

    </div>
  )}

export default App;
