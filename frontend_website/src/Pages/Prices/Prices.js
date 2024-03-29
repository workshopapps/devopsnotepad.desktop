import React, { useState } from 'react';
import style from './Prices.module.css';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import Data from './Data';
import PriceCard from './components/PriceCard/PriceCard';
import bad from './images/x.svg';
import good from './images/good.svg';
import SingleGridTable from './components/SingleGridTable/SingleGridTable';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';

const Prices = () => {
  const [toggleMonthly, setToggleMonthly] = useState(true);

  const handleToggle = (event) => {
    setToggleMonthly(event.target.checked);
  };

  return (
    <>
      <Navigation />
      <section className={style.pricesContainer}>
        <div className={style.pricesHeaderContainer}>
          <h1 className={style.pricesHeader}>
            Opspad has{' '}
            <span className={style.pricesHeaderBlue}>simple pricing</span> for
            everyone
          </h1>
          <h3 className={style.pricesSubheader}>Choose Your Plan</h3>
          <div className={style.toggleComment}>
            <ToggleSwitch
              toggleMonthly={toggleMonthly}
              handleToggle={handleToggle}
            />
          </div>
        </div>
        <div className={style.bgPriceGrid}>
          <div className={style.pricesSampleGrid}>
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
        </div>
        <div className={style.comparePrice}>
          <h1 className={style.comparePriceHeader}>Compare Our Plans</h1>
          <div className={`${style.tableContainer} ${style.hidden}`}>
            <ul className={style.ul}>
              <li className={`${style.li} ${style.starter}`}>Starter</li>
              <li className={style.li}>Professional</li>
              <li className={style.li}>Organization</li>
            </ul>

            {/* FOR DESKTOP SCREENS */}
            <div className={style.gridTable}>
              <h9 className={style.gridHeader}>Unlimited Number of servers</h9>
              <img
                className={`${style.gridItem} ${style.bad}`}
                src={bad}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <h9 className={style.gridHeader}>Notes</h9>
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <h9 className={style.gridHeader}>Third party integration</h9>
              <img
                className={`${style.gridItem} ${style.bad}`}
                src={bad}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <h9 className={style.gridHeader}>Collaborators</h9>
              <img
                className={`${style.gridItem} ${style.bad}`}
                src={bad}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.bad}`}
                src={bad}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <h9 className={style.gridHeader}>Unlimited downloads</h9>
              <img
                className={`${style.gridItem} ${style.bad}`}
                src={bad}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <h9 className={style.gridHeader}>Access to Opspad community</h9>
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
              <img
                className={`${style.gridItem} ${style.good}`}
                src={good}
                alt=''
              />
            </div>

            {/* /FOR MOBILE / TABLET SCREEN */}
          </div>
          <SingleGridTable />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Prices;
