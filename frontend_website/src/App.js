import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation';
import Faq from './Pages/Faq/Faq';
import Prices from './Pages/Prices/Prices';
import PricePayment from './Pages/Prices/components/PricePayment';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/faq" exact element={<Faq />} />
        <Route path="/prices" exact element={<Prices />} />
        <Route
          path="/prices/payment/:state/:index"
          exact
          element={<PricePayment />}
        />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
