import { useState } from "react";

import "./App.css";

function App() {
  const [Height, setHeight] = useState();
  const [Weight, setWeight] = useState();
  const [Bmi, setBmi] = useState(null);
  const [BmiStatus, setBmiStatus] = useState("");
  const [Error, setError] = useState("")
  const calculateBmi = () => {
    const validHeight=/^\d+$/.test(Height);
    const validWeight=/^\d+$/.test(Weight);
    if (validHeight && validWeight) {
      const value = Height / 100;
      const bmiValue = Weight / (value + value);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight");
      } else {
        setBmiStatus("Obese");
      }
      setError("")
    } else {
      setBmi(null);
      setBmiStatus("");
      setError("Please Enter valid numeric values vor Height and Weigth")
    }
  };
  return (
    <>
      <div className="bmi-calculator">
        <div className="box">
          {/* <img src="./assets/hi.png.webp" alt=""  width="400" height="400"  /> */}
        </div>
        <div className="data">
          <h1>Bmi Calculator</h1>
          <p className="error">{Error}</p>

          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="text"
              value={Height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              id="height"
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="text"
              value={Weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              id="weight"
            />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          {Bmi != null && (
            <div className="result">
              <p>Yor BMi is:{Bmi}</p>
              <p>Staus: {BmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
