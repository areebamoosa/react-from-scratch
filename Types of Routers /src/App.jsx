// Mini Project # 26 : Types of Routers
// Task : BrowserRouter vs HashRouter
// * Make a tiny app switching between both.
// * Observe URL differences.

import './App.css'
import Home from "./Components/Home"
import About from "./Components/About"
import { BrowserRouter, HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/*  swap BrowserRouter ↔ HashRouter */}

      {/* <BrowserRouter> */}

      <HashRouter>

        <nav>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* </BrowserRouter> */}

      </HashRouter>
    </>
  );
}
export default App;

// BrowserRouter → clean URLs like /about
// HashRouter → URLs with a hash like /#/about