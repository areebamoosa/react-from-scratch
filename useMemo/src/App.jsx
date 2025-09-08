// Mini Project # 11 : useMemo
// Task : Expensive Calculation Optimizer
// * Do a simple but “heavy” calculation (like factorial).
// * Use useMemo so it doesn’t recalc every render.
// * Show before/after performance difference in console.

import { useState, useMemo } from 'react';
import './App.css'

function factorial(n) {
  if (n === 0) return 1;
  console.log("Factorial recalculated");
  return n * factorial(n - 1);
}

function App() {

  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const factValue = useMemo(() => factorial(number), [number]);
  // This means factorial will only recalc when number changes, not on every render.

  return (
    <>
      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />

      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>Dummy count: {count}</p>

      {/* <p>Factorial: {factorial(number)}</p> */}
      <p>Factorial: {factValue}</p>

      {/* Console logs (before vs after):
    Before useMemo: factorial recalculated on every render, even if unrelated and the number was same .
    After useMemo: factorial recalculates only when number changes.  
*/}
    </>
  )
}

export default App

// What I learned : 
// Without useMemo: Expensive calculations (like factorial) re-runs on every render, even if nothing relevant changed.
// With useMemo: React “remembers” the result and only recalculates when its dependencies change.
// This saves performance.