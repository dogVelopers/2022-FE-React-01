import React from "react";
interface Props {
  name: String;
  age: Number;
}
function Person({ name, age }: Props) {
  return (
    <div>
      <p>
        나는 {name}입니다 나이는 {age}입니다
      </p>
    </div>
  );
}

export default Person;
