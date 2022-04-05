interface Props {
  name: string;
  age: number;
}

function Person({ name, age }: Props) {
  return (
    <div>
      <span>나는 {name}이고, </span>
      <span>내 나이는 {age} ~</span>
    </div>
  );
}

export default Person;
