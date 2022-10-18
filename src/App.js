import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

const alphabet = "abcdefghijklmnñopqrstuvwxyz";

const usedLettersList = ["a", "b", "c"];
const App = () => {
  const [usedLetters, setUsedLetters] = useState(usedLettersList);

  const addLetterToUsedLetters = (letterToAdd) => {
    if (usedLettersList.includes(letterToAdd)) {
      return;
    }
    const newUsedLetters = usedLettersList.push(letterToAdd);
    setUsedLetters(newUsedLetters);
  };

  return (
    <div className="container">
      <div className="main-container">
        <UsedLetters usedLetters={usedLettersList} />
        <Hangman />
      </div>
      <GuessLetters />
      <Result message={""} />
      <Letters alphabet={alphabet} onClick={addLetterToUsedLetters} />
    </div>
  );
};

export default App;
