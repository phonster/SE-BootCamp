import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 <FontAwesomeIcon icon={faRobot} className={'logo-icon'}/>This footer contains no arms</p>
    </footer>
  );
}

export default Footer;
