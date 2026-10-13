import React from "react";
import PlantCard from "./PlantCard";
// PlantList component renders a list of PlantCard components based on the provided plants prop
function PlantList({plants}) {
  return (
    <ul className="cards">{plants.map(plant => (
      <PlantCard key={plant.id} plant={plant} />
    ))}</ul>
  );
}

export default PlantList;
