import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        {/* <Route path="/" exact element={<Integration />} /> */}
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
