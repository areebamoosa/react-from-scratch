import "./App.css";
import Button from "./Components/Button";

// Mini Project # 02 : Components
// Task : Reusable Button Component
// * Create a Button component that takes props (like text and color).
// * Use it multiple times with different styles/text.

function App() {
  return (
    <>
      <Button text="Save" color="green" />
      <Button text="Delete" color="red" />
    </>
  );
}

export default App;
