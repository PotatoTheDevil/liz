import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HappyPage from "./pages/HappyPage";
import SadPage from "./pages/SadPage";
import StressedPage from "./pages/StressedPage";
import SurprisePage from "./pages/SurprisePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/happy" element={<HappyPage />} />
        <Route path="/sad" element={<SadPage />} />
        <Route path="/stressed" element={<StressedPage />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Router>
  );
};

export default App;
