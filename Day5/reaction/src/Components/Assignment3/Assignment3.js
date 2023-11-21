import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan, faClock, faPaperPlane, faBars, faRobot } from '@fortawesome/free-solid-svg-icons'

// Function to get url params
var urlParams;
(window.onpopstate = function () {
  var match,
      pl     = /\+/g,  // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
      query  = window.location.search.substring(1);

  urlParams = {};
  while (match = search.exec(query))
      urlParams[decode(match[1])] = decode(match[2]);
})();

let userAge = urlParams['age'];

function Assignment3(){
  return(
  <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', padding:1+'em', backgroundColor:'steelblue'}}>
    <p>User age is: {userAge}</p>
    <FontAwesomeIcon icon={faCaravan} />
    <FontAwesomeIcon icon={faClock} />
    <FontAwesomeIcon icon={faPaperPlane} />
    <FontAwesomeIcon icon={faBars} />
    <FontAwesomeIcon icon={faRobot} className="fa-icon-color"/>
  </div>
  );
}
export default Assignment3;
