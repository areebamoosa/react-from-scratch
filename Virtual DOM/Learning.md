# Concepts from this DOM Mini Project

## DOM :

DOM (Document Object Model) = the tree-like structure of your webpage.

**Example:**
```html
<body>
  <div id="root">
    <h1>Hello</h1>
    <button>Click</button>
  </div>
</body>
```

This is the real DOM in the browser.

If you change something (like text inside `<h1>`), the browser has to rebuild part of this tree → which is slow if done too often.

## Virtual DOM :

Virtual DOM (VDOM) = a copy of the real DOM stored in memory by React.

It’s just a JavaScript object that represents the UI.

**Example of VDOM :**
```js
{
  type: "div",
  props: {
    children: [
      { type: "h1", props: { children: "Hello" } },
      { type: "button", props: { children: "Click" } }
    ]
  }
}
```

## How React Uses the Virtual DOM :

1. When your component first renders → React builds a Virtual DOM version of the UI.

2. When state changes (setNumber) → React builds a new Virtual DOM.

3. React compares old VDOM vs new VDOM (this process is called diffing).

4. Only the difference is updated in the real DOM (this is called reconciliation).

👉 This is why React is fast! It avoids rebuilding the entire page.




### Counter Example :
```js
const [number, setNumber] = useState(0);

function increment() {
  setNumber(prev => prev + 1);
}

console.log("Re-rendering");
```
<br>

When you click Increment:

1. setNumber changes state.

2. React re-runs the component function → that’s why "Re-rendering" shows in console.

3. React builds a new Virtual DOM for App.

4. React compares it with the old one → sees that only the number changed.

5. React updates only that part in the real DOM, not the entire page.

### Conclusion :

**Without Virtual DOM:**

Browser would rebuild the entire UI tree each time → slow.

**With Virtual DOM:**

Only the changed piece gets updated → super fast and efficient.