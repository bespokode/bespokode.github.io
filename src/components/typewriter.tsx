import React, { useState } from "react";
import useInterval from "../helpers/useInterval";

function sleep(ms: number) {
  const start = Date.now();
  while (Date.now() - start < ms);
}


const TypewriterEffect = ({ phrases }: { phrases: string[] }) => {
  const [stringIndex, setStringIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  useInterval(() => {
    if (stringIndex < phrases[phraseIndex].length) {
      setStringIndex((prev) => prev + 1);
    } else {
      sleep(800);
      setStringIndex(0);
      if (phraseIndex + 1 >= phrases.length) {
        setPhraseIndex(0);
        return;
      }
      setPhraseIndex((prev) => prev + 1);
    }
  }, 200);
  return <span>{phrases[phraseIndex].slice(0, stringIndex)}&nbsp; </span>;
};

export default TypewriterEffect;
