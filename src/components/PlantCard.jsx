import React from "react";
import { useState } from "react";
// PlantCard component displays individual plant information and allows users to toggle stock status
function PlantCard({ plant }) {
  // State variable to manage stock status
  const [inStock, setInStock] = useState(true);
  // Function to toggle stock status when the button is clicked
  const handleStockToggle = () => {
    setInStock((prevInStock) => !prevInStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {Number(plant.price).toString()}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
