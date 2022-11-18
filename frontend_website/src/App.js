import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Navigation from "./Component/Navigation/Navigation";
import Integration from "./Pages/Integration/Integration";

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Routes>
        <Route path="/" exact element={<Integration />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
