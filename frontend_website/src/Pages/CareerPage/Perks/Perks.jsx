import auto from '../../../assets/career_page-assets/Icons/auto_awesome.svg';
import connect from '../../../assets/career_page-assets/Icons/connect_without_contact.svg';
import hospital from '../../../assets/career_page-assets/Icons/local_hospital.svg';
import payment from '../../../assets/career_page-assets/Icons/payments.svg';
import psychology from '../../../assets/career_page-assets/Icons/psychology.svg';
import publi from '../../../assets/career_page-assets/Icons/public.svg';
import videogame from '../../../assets/career_page-assets/Icons/videogame_asset.svg';

import Perk from './Perk';
import classes from './Perks.module.css';

const perks = [
  {
    icon: <img src={psychology} alt='icon_1' className={classes.svg} />,
    title: 'Learning & Development',
    description: 'Generous budget to enable personal growth.',
  },
  {
    icon: <img src={auto} alt='icon_2' className={classes.svg} />,
    title: 'Work-life balance',
    description:
      'At Team Sandpaper, we value you. We offer flexible holidays and working hours.',
  },
  {
    icon: <img src={hospital} alt='icon_2' className={classes.svg} />,
    title: 'Health insurance',
    description: 'Comprehensive health insurance.',
  },
  {
    icon: <img src={publi} alt='icon_2' className={classes.svg} />,
    title: 'Eco-friendly offices',
    description: 'We are lovers of people and ensure they work comfortably',
  },
  {
    icon: <img src={payment} alt='icon_2' className={classes.svg} />,
    title: 'Competitive Salary',
    description: 'We have a competitive salary approach for our staffs.',
  },
  {
    icon: <img src={videogame} alt='icon_2' className={classes.svg} />,
    title: 'Fun',
    description:
      'We often organize team building events, have reunions ot drinks together or play board games.',
  },
  {
    icon: <img src={connect} alt='icon_2' className={classes.svg} />,
    title: 'Remote accessibilty',
    description:
      'No matter where your computer is set up, enjoy the environment that suits you best.',
  },
];
const Perks = () => {
  return (
    <section className={classes.perks} data-testid='perks__list'>
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
