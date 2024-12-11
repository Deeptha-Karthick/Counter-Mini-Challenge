import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [mainVal, setMainVal] = useState(1);

  const updateCount = (type) => {
    if (type === "increment") {
      setCount((prev) => prev + mainVal);
    } else {
      setCount((prev) => prev - mainVal);
    }
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <strong> {count} </strong>
        <div>
          <button onClick={() => updateCount("increment")}>+</button>
          <button onClick={() => updateCount("decrement")}>-</button>
        </div>
        <div>
          <span>
            Increment or decrement by:
            <input
              type="number"
              min="1"
              max="10"
              value={mainVal}
              onChange={(event) => setMainVal(+event.target.value)}
            />
          </span>
        </div>
        <div>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
