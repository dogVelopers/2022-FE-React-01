import "./App.css";
import { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
//memo,callback최적화
function App() {
  const [number, setNumber] = useState<number>(0);
  function onClickUpButton() {
    setNumber((prev) => prev + 1);

    //비동기적으로 실행되기 때문
    //리액트는 virtual dom 이기 때문에
  }
  function onClickDownButton() {
    setNumber((prev) => prev - 1);
  }
  // useEffect(() => {
  //   console.log(number);
  //   //컴포넌트마운트
  //   //의존성 배열의 값이 바뀔때

  //   const timeout = setTimeout(() => {
  //     console.log("hello");
  //   }, 1000);
  //   console.log(buttonRef.current);
  //   // if (!buttonRef.current) return;
  //   // buttonRef.current.addEventListener("click", () => {
  //   //   setNumber((prev) => prev - 1);
  //   // });
  //   //컴포넌트언마운트
  //   //청소할 때
  //   // return () => {
  //   //   // clearTimeout(timeout);
  //   //   // console.log("끝");
  //   // };
  // }, []);
  // const buttonRef = useRef<HTMLButtonElement>(null); //자바스크립트코드에서 Html을 사용하고 싶을 때?

  return (
    <div>
      <h1>DogVelopers 22</h1>

      {number % 2 === 0 ? (
        <h2 className="even">{number}</h2>
      ) : (
        <h2 className="odd">{number}</h2>
      )}
      <button onClick={onClickUpButton}>up</button>
      <button onClick={onClickDownButton}>down</button>
      {/* <button ref={buttonRef}>down</button> */}
    </div>
  );
}

export default App;
