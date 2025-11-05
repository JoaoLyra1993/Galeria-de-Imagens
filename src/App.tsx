import React, { use, useEffect, useState } from "react";
import "./App.css";
import CallApi from "./services/ApiCall";

function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState();

  const hadleFormClick = (e) => {
    e.preventDefault();
    CallApi(setData, setError);
    console.log(data);
  };

  const handleInputChange = (e) => {
    setData(e.target.value);
  };
  useEffect(() => {
    CallApi(setData, setError);
  }, [data]);

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

          <img src={data} alt="" />
        </form>
      </div>
    </>
  );
}

export default App;
