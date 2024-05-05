import { Routes, Route, HashRouter } from "react-router-dom";
import CustomNavBar from "./components/CustomNavbar";
import React from "react";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <HashRouter>
      <CustomNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </HashRouter> 
  );
}
export default App;
