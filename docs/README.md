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

