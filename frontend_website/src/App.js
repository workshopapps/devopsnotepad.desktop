import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer />
    </div>
  );
}

export default App;
