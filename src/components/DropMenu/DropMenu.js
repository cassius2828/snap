import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const DropMenu = ({ topic, list, icon }) => {
  const [clientWidth, setClientWidth] = useState(null);
  const [showList, setShowList] = useState(false);

  // get current width for setting nav rules
  const getWindowWidth = () => {
    const width = window.innerWidth;
    setClientWidth(width);
  };

  useEffect(() => {
    getWindowWidth();
  }, [clientWidth]);

  // if screen width is under 800, then dropdown topics are controlled by click events
  // if screen width is over 800 , then dropdown topics are contorlled by hover events
  const toggleMenu = () => {
    if (clientWidth < 800) setShowList(true);

    setShowList(!showList);
  };
  const mouseEnter = () => {
    if (clientWidth > 800) setShowList(true);
  };

  const mouseLeave = () => {
    if (clientWidth > 800) setShowList(false);
  };

  return (
    <div className="drop-container">
      {list ? (
        <div
          onMouseEnter={mouseEnter}
          className={
            showList && clientWidth > 800 ? "topic fw6 white" : "topic fw6"
          }
        >
          {topic}{" "}
          <FontAwesomeIcon
            style={{ cursor: "pointer", zIndex: 3 }}
            onClick={toggleMenu}
            icon={showList ? faAngleUp : faAngleDown}
          />{" "}
        </div>
      ) : (
        <div style={{ cursor: "pointer" }} className="topic fw6">
          {topic}{" "}
        </div>
      )}
      {/* so i can style it */}
      {showList && (
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={list?.length > 0 ? "listPlus" : "list"}
        >
          <div className="icon-div">{icon}</div>

          <div className="list-div">{list}</div>
        </div>
      )}
    </div>
  );
};

export default DropMenu;
