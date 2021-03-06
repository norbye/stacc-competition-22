import React from "react";
import { Header } from "./features/header/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Gallery } from "./pages/gallery/Gallery";
import { Import } from "./pages/import/Import";
import { Nft } from "./pages/nft/Nft";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/import" element={<Import />} />
        <Route path="/asset/:assetId" element={<Nft />} />
      </Routes>
    </Router>
  );
}

export default App;
