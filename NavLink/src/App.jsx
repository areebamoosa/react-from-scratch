// Mini Project # 29 :  NavLink
// Task : Active Navbar
// * Navbar that highlights the active link with CSS when route is active.

import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import About from "./Components/About"

function App() {

  return (
    <>
      <BrowserRouter>

        <nav>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App