import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';

// Function to get url params
var urlParams;
(window.onpopstate = function () {
  var match,
      pl     = /\+/g,  // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
      query  = window.location.search.substring(1);

  urlParams = {};
  while ((match = search.exec(query)) !== null)
      urlParams[decode(match[1])] = decode(match[2]);
})();

switch (urlParams['assignment']) {
  case 'assignment3':
    ReactDOM.render(<div><App /></div>, document.getElementById('root'));
    break;
  case 'project2':
    ReactDOM.render(<div><App2 /></div>, document.getElementById('root'));
    break;
  default:
    ReactDOM.render(<div><App /></div>, document.getElementById('root'));
}

