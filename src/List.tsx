import Person from "component/Person";
import "App.css";

const people = [
  { name: "한슬희", age: 22 },
  { name: "김철수", age: 23 },
  { name: "김영수", age: 25 },
];

function List() {
  return (
    <div className="wrapper">
      <h1>개발자 명단</h1>
      <div className="listWrapper">
        {/* {people.map((each) => {
          return <Person {...each} />;
        })} */}
        {people.map((each) => {
          return <Person name={each.name} age={each.age} />;
        })}
      </div>
    </div>
  );
}

export default List;
