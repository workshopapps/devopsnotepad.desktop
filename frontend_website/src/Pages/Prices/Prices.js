import React, { useState } from 'react';
import './Prices.css';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import Data from './Data';
import PriceCard from './components/PriceCard/PriceCard';
import bad from './x.svg';
import good from './good.svg';
import SingleGridTable from './components/SingleGridTable/SingleGridTable';

const Prices = () => {
  const [toggleMonthly, setToggleMonthly] = useState(true);

  const handleToggle = (event) => {
    setToggleMonthly(event.target.checked);
  };

  return (
    <section className="prices-container">
      <div className="prices-header-container">
        <h1 className="prices-header">
          Opspad has <span className="prices-header-blue">simple pricing</span>{' '}
          for everyone
        </h1>
        <h3 className="prices-subheader">Choose Your Plan</h3>
        <div className="toggle-component">
          <ToggleSwitch
            toggleMonthly={toggleMonthly}
            handleToggle={handleToggle}
          />
        </div>
      </div>

      <div className="prices-sample-grid">
        {!toggleMonthly
          ? Data[0].items.map((item, index) => {
              return (
                <PriceCard
                  toggleMonthly={toggleMonthly}
                  card={item}
                  id={index}
                />
              );
            })
          : Data[1].items.map((card, index) => {
              return (
                <PriceCard
                  toggleMonthly={toggleMonthly}
                  card={card}
                  id={index}
                />
              );
            })}
      </div>

      <div className="compare-price">
        <h1 className="compare-price-header">
          Compare <span className="prices-header-blue">Our Plans</span>
        </h1>
        <div className="table-container hidden">
          <ul>
            <li>Starter</li>
            <li>Professional</li>
            <li>Organization</li>
          </ul>

          {/* FOR DESKTOP SCREENS */}
          <div className="grid-table">
            <h9 className="grid-header">Unlimited Number of servers</h9>
            <img className="grid-item bad" src={bad} alt="" />
            <img className="grid-item" src={good} alt="" />
            <img className="grid-item" src={good} alt="" />
            <h9 className="grid-header">Notes</h9>
            <img className="grid-item" src={good} alt="" />
            <img className="grid-item" src={good} alt="" />
            <img className="grid-item" src={good} alt="" />
            <h9 className="grid-header">Third party integration</h9>
            <img className="grid-item bad" src={bad} alt="" />
            <img className="grid-item" src={good} alt="" />
            <img className="grid-item" src={good} alt="" />
            <h9 className="grid-header">Collaborators</h9>
            <img className="grid-item bad" src={bad} alt="" />
            <img className="grid-item bad" src={bad} alt="" />
            <img className="grid-item" src={good} alt="" />
            <h9 className="grid-header">Unlimited downloads</h9>
            <img className="grid-item bad" src={bad} alt="" />
            <img className="grid-item" src={good} alt="" />
            <img className="grid-item" src={good} alt="" />
            <h9 className="grid-header">Access to Opspad community</h9>
            <img className="grid-item" src={good} alt="" />
            <img className="grid-item" src={good} alt="" />
            <img className="grid-item" src={good} alt="" />
          </div>

          {/* /FOR MOBILE / TABLET SCREEN */}
        </div>
        <SingleGridTable />
      </div>
    </section>
  );
};

export default Prices;
