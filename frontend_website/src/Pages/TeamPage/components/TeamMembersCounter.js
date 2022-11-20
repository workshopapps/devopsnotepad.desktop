import React from 'react';

const TeamMembersCounter = ({ icon, counts, position }) => {
  return (
    <div className='team__counter'>
      <div className='icon'>
        <img src={icon} alt={icon} />
      </div>
      <h5 className='current__count fs-3'>{counts}</h5>
      <p className='position text-light'>{position}</p>
    </div>
  );
};

export default TeamMembersCounter;
