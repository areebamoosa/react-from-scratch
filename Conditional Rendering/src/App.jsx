import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";

// Mini Project # 3 : Conditional Rendering
// Task: Login/Logout Toggle
// * Show “Welcome, User” when logged in, and a Login button when logged out.
// * Use conditional rendering (? : or &&) to switch UI.

function App() {
  const [loggedin, setLoggedin] = useState(false);

  function toggle() {
    setLoggedin((prev) => !prev);
  }

  return (
    <>
      {loggedin ? <h1>Welcome, User</h1> : null}

      <Button onClick={toggle} text={loggedin ? "Logout" : "Login"} />
    </>
  );
}

export default App;
