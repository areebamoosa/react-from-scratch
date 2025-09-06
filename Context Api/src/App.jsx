// Mini Project # 6 : Context API
// Task: Theme Switcher (Light/Dark)
// * Use Context to manage a global theme state.
// * Add a button to switch themes (light/dark).

import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./Context/Theme";

function ThemedApp() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div>
        <h1>{theme.toUpperCase()} MODE</h1>
        <button onClick={toggleTheme}>Switch Theme</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
