import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";
// PlantPage component manages the state of plants and search term, and renders the NewPlantForm, Search, and PlantList components
function PlantPage() {
  // State variables to manage the list of plants and the search term
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // Fetch the list of plants from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => {
        if (!r.ok) {
          throw new Error("Network response was not ok");
        }
        return r.json();
      })
      .then(data => setPlants(data))
      .catch(error => console.error("Error fetching plants:", error));
  }, []);
  // Filter the list of plants based on the search term
  const displayPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Function to handle adding a new plant to the list
  function handleAddPlant(newPlant) {
    setPlants(prevPlants => [...prevPlants, newPlant]);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayPlants} />
    </main>
  );
}

export default PlantPage;
