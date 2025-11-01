import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const hadleFormClick = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <div className="form-container">
        <form className="data-form">
          <input
            type="text"
            placeholder="O que deseja ver hoje?"
            onChange={handleInputChange}
          />
          <button onClick={hadleFormClick}>Buscar</button>
        </form>
      </div>
    </>
  );
}

export default App;
