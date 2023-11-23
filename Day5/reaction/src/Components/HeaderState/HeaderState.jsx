import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

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

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
  
// Use condition statements to show two different messages based on age
let userBirthYear = urlParams['userBirthYear'];
let currentYear = new Date().getFullYear();
const userAge = currentYear - userBirthYear;
const minDriverAge = 16;
let msgText = "hmmmm....not sure";

if(isNumber(userBirthYear)){
    if (0 < userAge && userAge < 125){
        if (userAge > minDriverAge) {
            msgText = <span style={{ display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleCheck} className={'fa-header fa-check'} />
                <p>Congrats, you can apply for a drivers license at age {userAge}</p></span>
        }
        else if (userAge > 10) {
            msgText = <span style={{ display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleXmark} className={'fa-header fa-x'} />
                <p>Sorry, you can't apply for license until you're over {minDriverAge}</p></span>
        }
        else {
            msgText = "Hey, stop playing on the computer!";
        }
    }
    else{
        msgText = "Please double check your birth year";
    }
}
else{
    msgText = "Please enter a valid Birth Year";
}

function HeaderState(){
    const [msgEligible, setEligibleMsg] = useState("Please enter your year of birth");
    function showYear(){
        let bYear = document.getElementById('birthYear');
        alert(bYear.value);
    }
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && !isNaN(n - 0)
    }
    function checkEligibility(){
        let userBirthYear = document.getElementById('birthYear').value;
        let currentYear = new Date().getFullYear();
        const userAge = currentYear - userBirthYear;
        const minDriverAge = 16;
        let msgText = "hmmmm....not sure";
        
        if(isNumber(userBirthYear)){
            if (0 < userAge && userAge < 125){
                if (userAge > minDriverAge) {
                    msgText = <span style={{ display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleCheck} className={'fa-header fa-check'} />
                        <p>Congrats, you can apply for a drivers license at age {userAge}</p></span>
                }
                else if (userAge > 10) {
                    msgText = <span style={{ display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleXmark} className={'fa-header fa-x'} />
                        <p>Sorry, you can't apply for license until you're over {minDriverAge}</p></span>
                }
                else {
                    msgText = "Hey, stop playing on the computer!";
                }
            }
            else{
                msgText = "Please double check your birth year";
            }
        }
        else{
            msgText = "Please enter a valid Birth Year";
        }
        setEligibleMsg(msgText);
    }
    return(
        <header>
            <div style={{border: '1xp solid red', display: 'block', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center'}}>
                <h2>{msgEligible}</h2>
                <div style={{display: 'flex'}}>
                    <input id={'birthYear'} type={'text'} style={{width: 50, height:'2em', marginLeft: '1em'}}/>
                    <button style={{marginLeft: '5px', color: 'white', backgroundColor: 'red', border: '0px', borderRadius: '.5em', height:'2.5em', fontWeight: '600'}} onClick={checkEligibility}>Check Eligibility</button>
                </div>
            </div>
        </header>);
}

export default HeaderState;
