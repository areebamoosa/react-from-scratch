// Mini Project # 7 : React Redux
// Task: Redux Counter
// * Build a counter app again, but this time with Redux.
// * Increment, decrement, and reset buttons.

import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Counter from "./Components/Counter";


import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;