import { Event, Experience } from "./org-exp-section-data";

const MUSIC_APP: Event[] = [
  {
    data: {
      date: "",
      video: "https://youtu.be/jYo6yAQ8mvU?si=BAioex32g43J33k-",
      eventName: "Spotify Clone",
      position: "",
      link: "/coding-pro/spotify-clone",
    },
    gridHeigth: 2,
  },
];

const CHAT_APP: Event[] = [
  {
    data: {
      date: "",
      video: "https://youtu.be/on5_h2MxR6M?si=Tl8DRAJQtyjMGCo7",
      eventName: "Discord Clone",
      position: "",
      link: "/coding-pro/discord-clone",
    },
    gridHeigth: 3,
  },
];

const SOCIAL_APP: Event[] = [
  {
    data: {
      date: "",
      video: "https://youtu.be/-kfZH9zbFqw?si=SdLZY7OT170Gg647",
      eventName: "Twitter Clone",
      position: "",
      link: "/coding-pro/twitter-clone",
    },
    gridHeigth: 3,
  },
];

const CODING_PRO: Experience[] = [
  { events: MUSIC_APP, position: "Music App" },
  { events: CHAT_APP, position: "Chat App" },
  { events: SOCIAL_APP, position: "Social App" },
];

export default CODING_PRO;
