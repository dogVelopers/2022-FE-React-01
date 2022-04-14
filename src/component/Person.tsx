interface Props {
  name: string;
  age: number;
}

// 함수 컴포넌트
function Person({name, age}: Props) {
  return (
    <div>
      <p>이름: <b>{name}</b> /  나이: <b>{age}</b>살</p>
    </div>
  );
}

export default Person;
// export default 컴포넌트 명
