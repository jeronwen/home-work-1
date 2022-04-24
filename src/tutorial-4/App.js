import React from "react";
import EmptyContent from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import adjectivesArr from "./data/Adjectives";
import nounsArr from "./data/Nouns";
import "./App.css";

export default function App() {
  const [phrases, setPhrase] = React.useState([]);

  const generatePhrase = () => {
    const indexOfAdjective = () => getRandomIndexOfArr(adjectivesArr.length, 0);
    const indexOfNouns = getRandomIndexOfArr(nounsArr.length, 0);
    const newPhrase = `${adjectivesArr[indexOfAdjective()]} ${
      adjectivesArr[indexOfAdjective()]
    } ${nounsArr[indexOfNouns]}`;
    setPhrase([...phrases, newPhrase]);
  };
  const getRandomIndexOfArr = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <div className="wrapper">
      <div className="list">
        {phrases.length ? <Phrase text={phrases} /> : <EmptyContent />}
      </div>
      <div className="buttons">
        <button className="btn btn_generate" onClick={() => generatePhrase()}>
          Сгенерировать
        </button>
        <button
          className="btn btn_clear"
          onClick={() => {
            setPhrase([]);
          }}
        >
          Очистить
        </button>
      </div>
    </div>
  );
}
