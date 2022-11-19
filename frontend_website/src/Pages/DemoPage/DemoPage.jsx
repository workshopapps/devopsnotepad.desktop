import React from 'react';
import { leftDemoNote } from './DemoData';
import Input from './Input';
import './DemoPage.css';
import RoomCard from '../NewsRoom/RoomCard';

const DemoPage = () => {
  return (
    <section className='demo__section'>
      <div className='demo__header'>
        <h2>
          Stay productive using <br /> OpsPad
        </h2>
      </div>
      <div className='demo__page-container'>
        <div className='demo__wrapper'>
          {leftDemoNote.map(({ id, title, note }) => {
            return (
              <RoomCard key={id} className='demos__demo'>
                <h4>{title}</h4>
                <p>{note}</p>
              </RoomCard>
            );
          })}
        </div>

        <div className='request__input'>
          <h3>Request for a demo</h3>
          <div className='form__request'>
            <p>
              Book a demo now and our team will contact you shorty to book a
              convenient time.
            </p>
            <Input />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPage;
