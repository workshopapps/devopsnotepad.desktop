import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import LandingPage from "./Pages/Landing page/LandingPage";
import Feature from "./Pages/Features/Feature";

function App() {
  return (
    <React.Fragment>
      {/* <Header/> */}
      <Routes>
        <Route path="/feature" exact element={<Feature />} />
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;