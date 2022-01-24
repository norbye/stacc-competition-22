import React from "react";
import { Header } from "./features/header/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/import" />
        <Route path="/create" />
      </Routes>
    </Router>
  );
}

export default App;
