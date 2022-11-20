import React from 'react';
import { useState } from 'react';
import { TeamData } from './data/team-members';

const AllTeam = () => {
  const [activeTab, setActiveTab] = useState('product-managers');

  return (
    <div className='all__teams'>
      <header className='container mt-4'>
        <nav>
          <ul className='p-0'>
            <li
              className={activeTab === 'product-managers' ? 'active' : ''}
              onClick={() => setActiveTab('product-managers')}
            >
              <button>Product Manager</button>
            </li>
            <li
              className={activeTab === 'marketers' ? 'active' : ''}
              onClick={() => setActiveTab('marketers')}
            >
              <button>Marketers</button>
            </li>
            <li
              className={activeTab === 'designers' ? 'active' : ''}
              onClick={() => setActiveTab('designers')}
            >
              <button>Designers</button>
            </li>
            <li
              className={activeTab === 'developers' ? 'active' : ''}
              onClick={() => setActiveTab('developers')}
            >
              <button>Developers</button>
            </li>
          </ul>
          <div></div>
        </nav>
      </header>

      {/* CONTENTS WOULD BE SHOWN BELOW */}
      <main>
        {activeTab === 'product-managers' ? (
          <ProductManagers />
        ) : activeTab === 'marketers' ? (
          <Marketers />
        ) : activeTab === 'designers' ? (
          <Designers />
        ) : (
          <Developers />
        )}
      </main>
    </div>
  );
};

export default AllTeam;

const ProductManagers = () => {
  return (
    <div className='container'>
      {TeamData.filter(
        (team) => team.role === 'product manager',
      )[0].members.map((member, i) => (
        <div className='member__wrapper' key={i}>
          <div>
            <h4>{member.name[0].toUpperCase() + member.name.slice(1)}</h4>
            <p className='p-0 m-0'>Product Manager</p>
          </div>
          <p>LinkedIn</p>
        </div>
      ))}
    </div>
  );
};

const Marketers = () => {
  return (
    <div className='container'>
      {TeamData.filter((team) => team.role === 'marketer')[0].members.map(
        (member, i) => (
          <div className='member__wrapper' key={i}>
            <div>
              <h4>{member.name[0].toUpperCase() + member.name.slice(1)}</h4>
              <p className='p-0 m-0'>Marketer</p>
            </div>
            <p>LinkedIn</p>
          </div>
        ),
      )}
    </div>
  );
};

const Designers = () => {
  return (
    <div className='container'>
      {TeamData.filter((team) => team.role === 'designer')[0].members.map(
        (member, i) => (
          <div className='member__wrapper' key={i}>
            <div>
              <h4>{member.name[0].toUpperCase() + member.name.slice(1)}</h4>
              <p className='p-0 m-0'>Designer</p>
            </div>
            <p>LinkedIn</p>
          </div>
        ),
      )}
    </div>
  );
};

const Developers = () => {
  return (
    <div className='container'>
      {TeamData.filter((team) => team.role === 'developer')[0].members.map(
        (member, i) => (
          <div className='member__wrapper' key={i}>
            <div>
              <h4>{member.name[0].toUpperCase() + member.name.slice(1)}</h4>
              <p className='p-0 m-0'>Developer</p>
            </div>
            <p>LinkedIn</p>
          </div>
        ),
      )}
    </div>
  );
};
