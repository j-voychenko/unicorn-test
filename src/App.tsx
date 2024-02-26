import { ScoreContainer, ScoreCell, Timer, Bank } from "./components.styled";
import "./App.css";

function App() {
  const cellValues = [2, 4, 16, 32, 64, 128];

  return (
    <>
      <ScoreContainer>
        {cellValues.reverse().map((value) => (
          <ScoreCell $isActive={false}>{value}</ScoreCell>
        ))}
      </ScoreContainer>
      <Timer>Timer</Timer>
      <Bank>Bank</Bank>
    </>
  );
}

export default App;
