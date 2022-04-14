## REACT

2022.03.31

### Props

어떠한 값을 컴포넌트에 전달할 때 props를 사용한다.

### react 구조 분해 할당

구조 분해 할당은 ES6의 등장과 함께 구현된 방식으로 구조 분해를 사용하면 객체 안에 있는 필드 값을 원하는 변수에 대입할 수 있다.

구조 분해 할당 O

```jsx
const score = [100, 20, 60];
const [sh, hs, ss] = score;
console.log(sh); // 100
```

구조 분해 할당 X

```jsx
const score = [100, 20, 60];
const sh = score[0];
const hs = score[1];
const ss = score[2];

console.log(sh); // 100
```

### 리스트 렌더링

Array.map(function)의 형태로 하위 컴포넌트에게 값을 전달해준다.

react에서 배열을 렌더링 할 때에는 key props를 반드시 추가해야한다. 각 고유 원소에 key 가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링 될 수 있다.

2022.04.07

## Hook

### useState

rerendering를 하기 위해서 state를 사용해야 한다.

```jsx
const [변수명, 변수를 바꿀 때 쓰는 것] = useState(초기값);
```

```jsx
function onClickUpButton() {
  setNumber((prev) => prev + 1);
}
```

비동기적으로 실행되면서 이전 값을 사용한다. (값이 보장)

React virtual dom때문에 state가 비동기적으로 쓰인다.

### useEffect

```jsx
// useEffect(함수, 배열);
// useEffect(effectCallback, dependency array);
useEffect(() => {}, []);
```

useEffect가 사용될 때

1. component가 mount될 때 (화면에 그려질 때)
2. dependency array에 있는 값이 바뀔 때
3. component unmount

### useRef

```jsx
useEffect(() => {
  console.log(buttonRef.current);
  if (!buttonRef.current) return;

  buttonRef.current.addEventListener("click", () => {
    console.log("down");
  });
}, []);
return <button ref={buttonRef}>down</button>;
```

useRef의 초기값은 null이다.

current안에 저장이 된다. (초기값이 null이기 때문에 값이 보장되지 않는다.)

```jsx
const buttonRef = useRef < HTMLButtonElement > null;
```

타입을 보장하기 위해 제너릭을 사용한다.

### 렌더링 최적화

- useMemo
- useCallback

과제

down button을 setStating 하기
홀수일 때 color 검정, 짝수일 때 빨간색
-> className
