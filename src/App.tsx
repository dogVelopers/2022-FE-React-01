import "./App.css";
import Person from "./components/Person"; // 1 
// 새 tsx 파일 생성 후 tsx파일에서 export 후 app.tsx에서 1,2 추가
import character from "./img/jjangu.jpeg";
import character2 from "./img/chulsooo.jpeg";
const people = [
  {name: "짱구", age: 5},
  {name: "철수", age: 5}
]

function App() {
  return (
    <div>
      <h1>DogVelopers 22</h1>

    {
      <div className="character-box">
          <img className="characters" src={character} alt="" />
          <img className="characters2" src={character2} alt="" />
      </div>
    }


      {/* js영역 */}
      {people.map((each)=>{
        return (
          <Person name = {each.name} age = {each.age} />
        )
      })} 

    </div>
  );
}

export default App;