import "./App.css";
import Person from "./components/Person";
// const people = ["지영", "지인", "지은"];
const people = [
  { name: "지영", age: 24 },
  { name: "수연", age: 24 },
  { name: "유경", age: 24 },
];
function App() {
  return (
    <div>
      <h1>DogVelopers 22</h1>
      <h1>안녕하세요 저는 지영입니다</h1>
      {people.map((e) => {
        return <Person name={e.name} age={e.age} />;
      })}
    </div>
  );
}

export default App;
