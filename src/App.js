import "./App.css";
import HighScore from "./HighScore";
import allCountryScores from "./ scores";
let Data = allCountryScores;

Data = Data.sort((item1, item2) =>
  item1.name.localeCompare(item2.name));
function App() {
  return (
    <div className="root">
      <HighScore data={Data} />
    </div>
  );
}

export default App;