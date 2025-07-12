import React, { useState, useEffect } from 'react';

const ROWS = 9;
const COLS = 24;

export default function Task4() {
  const [highlightedCells, setHighlightedCells] = useState([]);

  const generateHighlights = () => {
    return Array.from({ length: ROWS }, () =>
      Math.floor(Math.random() * COLS)
    );
  };

  useEffect(() => {
    setHighlightedCells(generateHighlights());

    const interval = setInterval(() => {
      setHighlightedCells(generateHighlights());
    }, 1000); // change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-screen h-screen grid"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {[...Array(ROWS * COLS)].map((_, index) => {
        const row = Math.floor(index / COLS);
        const col = index % COLS;
        const isHighlighted = highlightedCells[row] === col;

        return (
          <div
            key={index}
            className={`transition-colors duration-700 border border-gray-300 ${
              isHighlighted ? 'bg-blue-500' : 'bg-white'
            }`}
          />
        );
      })}
    </div>
  );
}
