import { AiTwotoneSetting } from 'react-icons/ai';
import { BsStars, BsCashStack } from 'react-icons/bs';
import { GiMedicalPack } from 'react-icons/gi';
import { FaGlobeAmericas } from 'react-icons/fa';
import { MdVideoStable, MdOutlineConnectWithoutContact } from 'react-icons/md';

import Perk from './Perk';
import classes from './Perks.module.css';

const perks = [
  {
    icon: <AiTwotoneSetting className={classes.svg} />,
    title: 'Learning & Development',
    description: 'Generous budget to enable personal growth.',
  },
  {
    icon: <BsStars className={classes.svg} />,
    title: 'Work-life balance',
    description:
      'At Opspad, we value you. We offer flexible holidays and working hours.',
  },
  {
    icon: <GiMedicalPack className={classes.svg} />,
    title: 'Health insurance',
    description: 'Comprehensive health insurance.',
  },
  {
    icon: <FaGlobeAmericas className={classes.svg} />,
    title: 'Eco-friendly offices',
    description: 'We are lovers of people and ensure they work comfortably',
  },
  {
    icon: <BsCashStack className={classes.svg} />,
    title: 'Competitive Salary',
    description: 'We have a competitive salary approach for our staffs.',
  },
  {
    icon: <MdVideoStable className={classes.svg} />,
    title: 'Fun',
    description:
      'We often organize team building events, have reunions ot drinks together or play board games.',
  },
  {
    icon: <MdOutlineConnectWithoutContact className={classes.svg} />,
    title: 'Remote accessibilty',
    description:
      'No matter where your computer is set up, enjoy the environment that suits you best.',
  },
];
const Perks = () => {
  return (
    <section className={classes.perks}>
      <h1 className={classes.h1}>The Perks</h1>
      <ul className={classes.ul}>
        {perks.map((perk, index) => (
          <Perk
            key={index}
            icon={perk.icon}
            title={perk.title}
            description={perk.description}
          />
        ))}
      </ul>
    </section>
  );
};
export default Perks;
