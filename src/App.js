import "./App.css";
import HighScore from "./HighScore";
import allCountryScores from "./ scores";

function App() {
  return (
    <div className="root">
      <HighScore data={allCountryScores} />;
    </div>
  );
}

export default App;
