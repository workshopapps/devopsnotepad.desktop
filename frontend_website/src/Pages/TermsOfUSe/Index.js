import React, { useState } from 'react';
import styled from 'styled-components';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    background: #ededed;
    border-bottom: 1px solid #ededed;
    color: #102A63;
    font-weight: 600;
    font-size: 20px;
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
    <>
      <div className='tp-header'>Legal</div>
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
    </>
  );
};
// Usage
export default Index;
