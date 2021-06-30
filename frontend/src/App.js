import React from "react";
import MainHeader from "./components/layout/MainHeader";
import Content from "./components/layout/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Content />
      </Router>
    </div>
  );
}

export default App;
