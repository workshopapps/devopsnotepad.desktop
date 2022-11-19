import cgSection from "./assets/conversation-going.png";
import noSection from "./assets/no-restriction.png";
import eiSection from "./assets/escalate-issues.png";

import slack from "./assets/getMore/slack.svg";
import googleDrive from "./assets/getMore/googledrive.svg";
import gmail from "./assets/getMore/gmail.svg";
import jira from "./assets/getMore/jira.svg";
import trello from "./assets/getMore/trello.svg";
import googleMeet from "./assets/getMore/googlemeet.svg";

export const list = [
    {
      heading: "Keep the conversation going and safe",
      content:
        "Send server notes quickly from your Opspad to conversation apps like slack, Gmail & microsoft teams.",
      banner: cgSection,
    },
    {
      heading: "Access notes without restrictions ",
      content:
        "Access saved google drive notes quickly with OPspad integration.",
      banner: noSection,
      banner_flex_position: true,
    },
    {
      heading: "Set up task from your notes with ease",
      content:
        "Automatically discover incidents directly from your trello board. Opspad-triggered alerts automatically generate, and update jira tickets.",
      banner: eiSection,
    },
  ];


export const getMore = [
    {
      heading: "Slack",
      content:
        "With our slack integration, you’ll be able to update slack channels with the server’s notes and details of a specific event on each server. With this, your team is always aware of potential or happening risks.",
      img: slack,
      linkLabel: "Learn More",
      slug: "/slack"
    },
    {
      heading: "Google Drive",
      content:
        "With our Google driveintegration, you’ll be able to update  with the server’s notes and details of a specific event on each server. With this, your team is always aware of potential or happening risks.",
      img: googleDrive,
      linkLabel: "Learn More",
      slug: "/google-drive"
    },
    {
      heading: "Gmail",
      content:
        "With gmail integration, you wiill be able to send emails with server notes and details of specific event on each servers",
      img: gmail,
      linkLabel: "Learn More",
      gmail: true,
      slug: "/gmail"
    },
    {
      heading: "JIra",
      content:
        "With our jira integration, you’ll be able to update create tasks with the server’s notes and details of a specific event on each server. With this, your team is always aware of potential or happening risks.",
      img: jira,
      linkLabel: "Learn More",
      slug: "/jira"
    },
    {
      heading: "Trello",
      content:
        "With our trello integration, you’ll be able to update slack channels with the server’s notes and details of a specific event on each server. ",
      img: trello,
      linkLabel: "Learn More",
      slug: "/trello"
    },
    {
      heading: "Google Meet",
      content:
        "With our google meet integration, you’ll be able to take notes easily on an event  with the server’s notes and details of a specific event on each server. ",
      img: googleMeet,
      linkLabel: "Learn More",
      slug: "/google-meet"
    },
  ];