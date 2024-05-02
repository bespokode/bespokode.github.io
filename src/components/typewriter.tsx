import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const words = ["hola", "maquina", "yo"];
  const speed = 50;
  const [displayWordIndex, setDisplayWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let intervalId = setInterval(()=>{});

    const typeNextCharacter = () => {
      const currentWord = words[displayWordIndex];

      if (currentIndex > currentWord.length) {
        setDisplayText((prevText) => prevText + currentWord[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setDisplayText("");
          currentIndex = 0;
          intervalId = setInterval(typeNextCharacter, speed);
        }, 1000); // Espera 1 segundo antes de comenzar la siguiente palabra
      }
    };

    intervalId = setInterval(typeNextCharacter, speed);

    return () => clearInterval(intervalId);
  }, [words, speed, displayWordIndex]);

  return <span>{displayText}</span>;
};

export default TypewriterEffect;
