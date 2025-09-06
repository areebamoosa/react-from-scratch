# Learnings from React List Mini Project

In React, onChange is an event handler.

It gets triggered every time the user types, deletes, or changes the input box value.

React passes an event object (e) into the function, and from that you can grab the current value with e.target.value.

### What does this line do?

```js
setTodos([...todo, newTodo]);
```

todo is your current array of tasks.

newTodo is the new object you just created.

[...todo, newTodo] means → “make a new array with all the old todos plus the new one at the end.”

Then setTodos() updates the state with that new array

### Why not just todos.push(newTodo)?

Because in React:

State must be treated as immutable (unchangeable).

push() changes (mutates) the old array directly. React might not notice the change → bugs.

`[...todos, newTodo]` creates a brand new array, and React definitely sees it’s new, so it re-renders correctly.

### What are these dots ...?

That’s the spread operator in JavaScript.

It takes an array (or object) and “spreads” its elements out.

**Example:**

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]
```

**Another example with objects:**

```js
const obj = { name: "Areeba" };
const newObj = { ...obj, age: 20 };
// { name: "Areeba", age: 20 }
```

#### Key Ideas

... = spread out the contents.

[...todos, newTodo] = take all old todos, then add newTodo at the end → create a brand new array.
