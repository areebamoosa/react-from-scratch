// Mini Project # 13 : Toggle Button
// Task : Show/Hide Text
// * A button that toggles between showing and hiding some text.

import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>Show / Hide Text</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>This is the hidden message 👋</p>}
    </div>
  );
}

export default App;