# Learnings from this Mini Project

```js
import React, { createContext, useState } from "react";
```

You’re pulling in React tools.

createContext = makes the box to store global data.

useState = lets you keep track of the current theme (light/dark).

```js
export const ThemeContext = createContext();
```

This line creates the box called ThemeContext.

Other components can “open” this box to read or change the theme.

```js
export const ThemeProvider = ({ children }) => { }
```

This is a Provider component.

children = whatever you wrap inside `<ThemeProvider> ... </ThemeProvider>` will go here.

```js

const [theme, setTheme] = useState("light");
````

Makes a state variable called theme.

Starts as "light".

setTheme = function to change it.

```js
const toggleTheme = () => {
  setTheme((prev) => (prev === "light" ? "dark" : "light"));
};
```

This is a function to switch themes.

If it’s "light", change to "dark". If it’s "dark", change to "light".

```js
return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
);
```

Wraps your app in the Provider.

value={{ theme, toggleTheme }} → this is what’s inside the “box.”

Any component can grab theme or toggleTheme from here.

{children} means whatever you wrapped inside <ThemeProvider> will be displayed.
