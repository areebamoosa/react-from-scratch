// Mini Project # 18 : Email Input Validation (onBlur)
// * Add an input field for email.
// * When the user leaves the field (on blur), validate the email format.
// * Show an error message if the email is invalid.

import './App.css'
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email");
    } else {
      setError("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
      />


      {error && <p style={{ color: "red" }}>{error}</p>}

    </>
  )
}

export default App