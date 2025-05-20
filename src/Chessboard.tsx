import React, { useState } from "react";

const Chessboard = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const board = [];

  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const coord = `${files[col]}${row}`;
      const Dark = (row + col) % 2 === 1;
      const isSelected = selected === coord;
      const isHovered = hovered === coord;
      const showText = isSelected || isHovered;

      board.push(
        <div
          key={coord}
          onClick={() => {
            setSelected(coord);
            console.log(coord);
          }}
          onMouseEnter={() => setHovered(coord)}
          className={`w-10 h-10 font-light text-sm ${
            Dark ? "bg-yellow-500 text-black" : "bg-gray-800 text-white"
          }
       ${isSelected ? "border-4 border-white " : ""}`}
        >
          {showText && coord}
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center mb-10 mt-10">CHESSBOARD GAME</h1>

      <div className="grid grid-cols-8 grid-row-8 w-80 border-2 border-black ">
        {board}
      </div>
    </div>
  );
};

export default Chessboard;
