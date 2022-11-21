import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation';
import Faq from './Pages/Faq/Faq';
import Csr from './Pages/Csr/Csr';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        {/* <Route path="/" exact element={<Integration />} /> */}
        <Route path="/faq" exact element={<Faq />} />
        <Route path="/csr" exact element={<Csr />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
