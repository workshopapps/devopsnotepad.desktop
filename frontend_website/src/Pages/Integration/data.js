import cgSection from './assets/conversation-going.png';
import noSection from './assets/no-restriction.png';
import eiSection from './assets/escalate-issues.png';

import slack from './assets/getMore/slack.svg';
import googleDrive from './assets/getMore/googledrive.svg';
import gmail from './assets/getMore/gmail.svg';
import jira from './assets/getMore/jira.svg';
import trello from './assets/getMore/trello.svg';
import googleMeet from './assets/getMore/googlemeet.svg';

export const list = [
  {
    heading: 'Keep the conversation going and safe',
    content:
      'Send server notes quickly from your Opspad to conversation apps like slack, Gmail & microsoft teams.',
    banner: cgSection,
  },
  {
    heading: 'Access notes without restrictions ',
    content: 'Access saved google drive notes quickly with OPspad integration.',
    banner: noSection,
    banner_flex_position: true,
  },
  {
    heading: 'Set up task from your notes with ease',
    content:
      'Automatically discover incidents directly from your trello board. Opspad-triggered alerts automatically generate, and update jira tickets.',
    banner: eiSection,
  },
];

export const getMore = [
  {
    heading: 'Slack',
    content:
      'With our slack integration, you’ll be able to update slack channels with the server’s notes and details of a specific event on each server. With this, your team is always aware of potential or happening risks.',
    img: slack,
    linkLabel: 'Learn More',
    slug: '/slack',
    getmore: true,
  },
  {
    heading: 'Google Drive',
    content:
      'Automatically import or save your Opspad server notes to your drive.',
    img: googleDrive,
    linkLabel: 'Learn More',
    gmail: true,
    slug: '/google-drive',
  },
  {
    heading: 'Gmail',
    content:
      'With the Gmail integration, teams get notifications in real-time and respond directly from their PCs or phones while  on the go.',
    img: gmail,
    linkLabel: 'Learn More',
    slug: '/gmail',
  },
  {
    heading: 'JIra',
    content:
      'Jira helps teams plan, assign, track, report, and manage work. The integration with Jira imakes it easy to create and assign issues from triggered alerts in OPspad.',
    img: jira,
    linkLabel: 'Learn More',
    getmore: true,
    slug: '/jira',
  },
  {
    heading: 'Trello',
    content:
      'Trello is a tool to help you manage your projects and organize everything. Opspad provides convenient integration with Trello, which lets you visually organize incidents discovered directly into your Trello boards.',
    img: trello,
    linkLabel: 'Learn More',
    getmore: true,
    slug: '/trello',
  },
  {
    heading: 'Google Meet',
    content:
      'Our OPspad + Google meet solution uses automation and guaranteed notification for DevOps engineers to assemble response teams faster and more efficiently when dealing with critical incidents.',
    img: googleMeet,
    linkLabel: 'Learn More',
    slug: '/google-meet',
  },
];
