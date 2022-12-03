/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import styled from 'styled-components';
import Terms from './Terms';
import PrivacyPolicy from './privacyPolicy';
import classes from './Terms.module.css';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  font-family: 'Manrope';
  border: 0;
  outline: 0;
  @media (max-width: 600px) {
    padding: 10px 10px;
    font-size: 16px;
  }
  ${({ active }) =>
    active &&
    `
    background: #EDEDED;
    border-bottom: 1px solid #ededed;
    color: #225ad6;
    font-weight: 600;
    font-size: 20px;
    font-family: 'Manrope';

};
    border-radius: 10px 10px 0px 0px;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const types = ['Terms Of Use', 'Privacy Policy'];
const Index = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <section className={classes.section}>
      <div className={classes.tp_header}>Legal</div>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>

      <p> {active === types[0] ? <Terms /> : <PrivacyPolicy />} </p>
    </section>
  );
};
// Usage
export default Index;
