
import { useState } from "react";

const Add = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="counter">
        <button
          disabled={counter <= 0 && true}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>

        <p>{counter}</p>
        <button
          disabled={counter >= 10 && true}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default Add;