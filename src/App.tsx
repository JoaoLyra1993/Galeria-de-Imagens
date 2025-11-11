import { useEffect, useState } from "react";
import "./App.css";
import CallApi from "./services/ApiCall";

function App() {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState();

  useEffect(() => {
    CallApi(setData, setError);
  }, []);

  const hadleFormClick = (e) => {
    e.preventDefault();
    CallApi(setData, setError);
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

          <img src={data} alt="" />
        </form>
      </div>
    </>
  );
}

export default App;
