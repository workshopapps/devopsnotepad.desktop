import { useState } from 'react';
import { TbArrowDownLeft } from 'react-icons/tb';
import Button from '../../CareerPage/Button/Button';

import Opening from './Opening';
import classes from './Openings.module.css';

const openings = [
  {
    location: 'Onsite',
    title: 'DevOps Engineer',
    department: 'Engineering',
  },
  {
    location: 'Onsite',
    title: 'Director of Sales',
    department: 'Marketing',
  },
  {
    location: 'Remote',
    title: 'Senior Product Designer',
    department: 'Design',
  },
  {
    location: 'Remote',
    title: 'Fullstack Software Engineer',
    department: 'Engineering',
  },
  {
    location: 'Remote',
    title: 'Backend Software Engineer',
    department: 'Engineering',
  },
  {
    location: 'Remote',
    title: 'Senior Customer Care Director',
    department: 'Customer Support',
  },
  {
    location: 'Remote',
    title: 'Mobile(IOS) Software Developer',
    department: 'Engineering',
  },
  {
    location: 'Onsite',
    title: 'Senior Finance Manager',
    department: 'Finance',
  },
  {
    location: 'Onsite',
    title: 'Social Media Manager',
    department: 'People Operations',
  },
  {
    location: 'Remote',
    title: 'Technical Support Engineer',
    department: 'Engineering',
  },
  {
    location: 'Remote',
    title: 'UX Researcher',
    department: 'Design',
  },
  {
    location: 'Onsite',
    title: 'Director of Sales',
    department: 'Marketing',
  },
  {
    location: 'Remote',
    title: 'Senior Product Manager',
    department: 'Engineering',
  },
];
const Openings = () => {
  const [end, setEnd] = useState(7);
  return (
    <section
      className={classes.openings}
      data-testid='opening__list'
      id='openings'
    >
      <div className={classes.div}>
        <h1 className={classes.h1}>See Current Openings</h1>
        <div className={classes.sub}>
          <p className={classes.p}>See if there’s a position for you...</p>
          <TbArrowDownLeft className={classes.svg} />
        </div>
      </div>
      <ul className={`${classes.ul} ${classes.desktop}`}>
        {openings.map((opening, index) => (
          <Opening
            key={index}
            location={opening.location}
            title={opening.title}
            department={opening.department}
          />
        ))}
      </ul>
      <div className={classes.mobile}>
        <ul className={classes.ul}>
          {openings.slice(0, end).map((opening, index) => (
            <Opening
              key={index}
              location={opening.location}
              title={opening.title}
              department={opening.department}
            />
          ))}
        </ul>
        <div className={classes.btn_box}>
          {end < openings.length ? (
            <Button
              onClick={() => setEnd(openings.length)}
              className={classes.button}
            >
              See more...
            </Button>
          ) : (
            <Button onClick={() => setEnd(7)} className={classes.button}>
              See less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
export default Openings;
