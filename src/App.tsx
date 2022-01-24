import React from "react";
import { Header } from "./features/header/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Gallery } from "./pages/gallery/Gallery";
import { Import } from "./pages/import/Import";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/import" element={<Import />} />
        <Route path="/create" />
      </Routes>
    </Router>
  );
}

export default App;
