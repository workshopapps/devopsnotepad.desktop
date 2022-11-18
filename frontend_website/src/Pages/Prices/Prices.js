import React, { useState } from 'react';
import './Prices.css';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import Data from './Data';
import PriceCard from './PriceCard';

const Prices = () => {
  const [toggleMonthly, setToggleMonthly] = useState(true);
  return (
    <section className="prices-container">
      <div className="prices-header-container">
        <h1 className="prices-header">
          Opspad has <span className="prices-header-blue">simple pricing</span>{' '}
          for everyone
        </h1>
        <h3 className="prices-subheader">Choose Your Plan</h3>
        <div className="toggle-component">
          <ToggleSwitch />
        </div>
      </div>

      {toggleMonthly && (
        <div className="prices-sample-grid">
          {Data[0].items.map((item, index) => {
            <PriceCard card={item} id={index} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Prices;
