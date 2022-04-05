import "./App.css";
import Person from "./components/Person";

// const people = ["신수연", "박지영", "박지영 메롱"];

const people = [
  { name: "신수연", age: 24 },
  { name: "박지영", age: 24 },
]; // objecy 만들기

function App() {
  return (
    <div>
      <h1>DogVelopers 22</h1>
      <h2>하이 아임 수연</h2>

      {/* array.map((각 뚯하는 변수명) => {jsx를 반환하는 코드}) */}
      {people.map((person, index) => {
        return <Person key={index} name={person.name} age={person.age} />;
      })}
    </div>
  );
}

export default App;

//
