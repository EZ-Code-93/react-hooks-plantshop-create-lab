import React from "react";
// Header component displays the application title and logo
function Header() {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
    </header>
  );
}

export default Header;
