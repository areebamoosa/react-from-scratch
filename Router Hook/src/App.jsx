// Mini Project # 27 : React-Router Hooks
// Task : Dynamic User Page
// * Use useParams to show user details like /user/1.

import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function User() {
  const { id } = useParams(); // gets "1", "2", etc from the URL

  return <h2>User Page - ID: {id}</h2>;
}

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/user/1">User 1</Link> |{" "}
          <Link to="/user/2">User 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App