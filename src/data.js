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
      <FontAwesomeIcon style={{ color: "#3cec1b" }} icon={faList} />,
      <FontAwesomeIcon style={{ color: "#672AEA" }} icon={faCalendar} />,
      <FontAwesomeIcon style={{ color: "#De2b2b" }} icon={faBell} />,
      <FontAwesomeIcon style={{ color: "#Ecdd1b" }} icon={faClock} />,
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
