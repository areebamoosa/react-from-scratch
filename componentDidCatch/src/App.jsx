// Mini Project # 22 : componentDidCatch
// Task : Error Boundary
// * Wrap a component that throws error.
// * Show fallback UI instead of crashing app.

import React from "react";
import "./App.css";

// ErrorBoundary Component
class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state if error occurs
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Optional log error
  componentDidCatch(error, info) {
    console.log("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

// Component that throws error
function BrokenComponent() {
  throw new Error("Boom! I crashed!");
  return <h1>This will never show</h1>
}


function App() {
  return (
    <>
      <h1>Error Boundary Demo</h1>
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    </>
  );
}

export default App;
