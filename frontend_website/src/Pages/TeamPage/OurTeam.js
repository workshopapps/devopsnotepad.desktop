import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/our-team.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import heroBG from './images/hero-bg.png';
import faceIcon from './images/icons/face.png';
import personIcon from './images/icons/person_outline.png';
import devicesIcon from './images/icons/devices.png';

import TeamMembersCounter from './components/TeamMembersCounter';
import { TeamData } from './data/team-members';
import TeamDeptInfo from './components/TeamDeptInfo';

const OurTeam = () => {
  const handleCounts = (position) => {
    const res = TeamData.filter((team) => {
      if (team.role === position) return team;
    });
    return res[0].members.length;
  };

  return (
    <main className='our__team'>
      <section className='hero container mb-0'>
        <article className='hero__desc'>
          <h1>
            Meet The <span className='text-primary'>Team </span> Behind The
            Development Of This App
          </h1>
          <p>
            We're passionate about helping DevOps engineers stay organized and
            on top of their games.
          </p>
        </article>
        <article className='herobg__wrapper'>
          <img src={heroBG} alt='Hero background' />
        </article>
      </section>

      <section className='team__counter-wrapper pt-4 pb-4'>
        <div className='team__counter-inner container'>
          <TeamMembersCounter
            icon={faceIcon}
            counts={handleCounts('product manager')}
            position='Product Managers'
          />
          <TeamMembersCounter
            icon={personIcon}
            counts={handleCounts('marketer')}
            position='Marketers'
          />
          <TeamMembersCounter
            icon={personIcon}
            counts={handleCounts('designer')}
            position='Designers'
          />
          <TeamMembersCounter
            icon={devicesIcon}
            counts={handleCounts('developer')}
            position='Developers'
          />
        </div>
      </section>

      <section>
        <div className='mt-5 team__section'>
          <h4 className='section__title text-center fs-1'>
            Our <span className='text-primary'>Product Managers</span>
          </h4>
          <TeamDeptInfo
            position='product manager'
            desc={
              'Our esteemed product managers have vast experience in product management and spent years focused on task delivery and the complexity,variation, and tight deadlines associated with it.'
            }
            ctaText='Product Managers'
          />
        </div>

        <div className='mt-5 team__section'>
          <h4 className='section__title text-center fs-1'>
            Our <span className='text-primary'>Marketers</span>
          </h4>
          <TeamDeptInfo
            position={'marketer'}
            desc={
              'Our Frontline marketers bring a spirit of creativity to every project. They work tirelessly to build and grow reputation, engagement, and demand as OPspad pursues its mission to help DevOps engineers.'
            }
            ctaText='Marketers'
            isRowReverse={true}
          />
        </div>

        <div className='mt-5 team__section'>
          <h4 className='section__title text-center fs-1'>
            Our <span className='text-primary'>Designers</span>
          </h4>
          <TeamDeptInfo
            position={'designer'}
            desc={
              "Our Creative designers are our pride. They create stunning designs and come up with incredible ideas every day. Their beliefs are ''make it beautiful, thoughtful, and impactful''."
            }
            ctaText='Designers'
          />
        </div>

        <div className='mt-5 team__section'>
          <h4 className='section__title text-center fs-1'>
            Our <span className='text-primary'>Developers</span>
          </h4>
          <TeamDeptInfo
            position={'developer'}
            desc={
              "Our Talented team of developers is the soul of our company. They are experts in their field. Our developer's spirit, expertise, and perspective help us create solutions beyond ideas."
            }
            ctaText='Developers'
            isRowReverse={true}
          />
        </div>
      </section>
    </main>
  );
};

export default OurTeam;
