import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
// App component serves as the root component of the application, rendering the Header and PlantPage components
function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
