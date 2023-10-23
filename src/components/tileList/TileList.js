import React from "react";
// - Step 5 - import Tile
import { Tile } from "../tile/Tile";


// - Step 5 - implement TileList as stateless component
// - Step 5 - render list of Tile components using array of objects
export const TileList = ({ tiles }) => {
  return (
    <div>
    {tiles.map((tile, index) => {
      const {name, ...description } = tile;
      return <Tile key={index} name={name} description={description}/>
    })}
    </div>
  );
};
