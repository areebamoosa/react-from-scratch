import "./App.css";
import { createElement, useState } from "react";
import Button from "./Components/Button";

// Mini Project # 5 : React Lists
// Task: Todo List Renderer
// * Have an array of todos.
// * Render them dynamically with .map().

function App() {
  // todos array (starts empty)
  const [todo, setTodo] = useState([]);

  // input value (what user types)
  const [inputVal, setInputVal] = useState("");

  const addTodo = () => {
    const text = inputVal.trim();
    if (!text) return; // stops if empty

    const newTodo = {
      id: Date.now(), //Unique ID
      text: text,
    };

    setTodo([...todo, newTodo]); // Adding the todo to the array
    setInputVal(""); // Clearing input after addinng so the user can add new input
  };

  return (
    <>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <Button onAdd={addTodo} />
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
