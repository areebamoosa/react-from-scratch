import { useState } from "react";
import Button from "./Components/Button";
import "./App.css";

// Mini Project # 4 : Virtual DOM
// Task: Counter with Console Logs
// * Create a counter.
// * Log to console every render so you understand how React re-renders with Virtual DOM.

function App() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    setNumber(number - 1);
  }

  console.log("Re-rendering");

  return (
    <>
      {number}
      <br />

      <br />

      <Button text="Increment" func={increment} />
      <br />

      <Button text="Decrement" func={decrement} />
    </>
  );
}

export default App;
