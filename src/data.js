import {
  faBell,
  faCalendar,
  faClock,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    topic: "Features",
    list: ["ToDo List", "Calendar", "Reminders", "Planning"],
    icon: [
      <FontAwesomeIcon style={{ color: "#e3ce39" }} icon={faList} />,
      <FontAwesomeIcon style={{ color: "#8e4cb6" }} icon={faCalendar} />,
      <FontAwesomeIcon style={{ color: "#4cb1da" }} icon={faBell} />,
      <FontAwesomeIcon style={{ color: "#726cee" }} icon={faClock} />,
    ],
  },
  {
    topic: "Company",
    list: ["History", "Our Team", "Blog"],
  },
  {
    topic: "Careers",
    list: null,
  },
  {
    topic: "About",
    list: null,
  },
];

export default data;
