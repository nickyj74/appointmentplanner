import React from "react";

// - Step 6 - Line 6 - receive 2 props into Tile
// - Step 6 - Line 9 - p className="tile"
// - Step 6 - Line 12 - iterate over description values
export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">
        {name}
      </p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
