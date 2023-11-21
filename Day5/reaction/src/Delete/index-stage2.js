import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan, faClock, faPaperPlane, faBars, faRobot } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import App from '../App';
import App2 from '../App2';
import Assignment3 from '../Components/Assignment3/Assignment3';
import reportWebVitals from '../reportWebVitals';
import MyFooter from '../MyFooter';
import MyTable from '../MyTable';
import MyPet from './MyPet';
import Pets from './Pets';

// You can add some JS vars here
const userBirthYear = 2005;
const currentYear = new Date().getFullYear();

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
// alert(`Parameter assignment: ${urlParams['assignment']}`);

// Use condition statements to show two different messages based on age
const userAge = currentYear - userBirthYear;
const minDriverAge = 16;
var msgText = "hmmmm....not sure";
if(userAge > minDriverAge){
  msgText = "Congrats, you can apply for a drivers license";
}
else if(userAge > 10){
  msgText = "Sorry, you can't apply for license until you're over " + minDriverAge;
}
else{
  msgText = "Hey, stop playing on the computer!";
}


// CSS by default uses curly braces. JSX objects are in curly braces. That's why it
// looks like style attributes are written with double curly braces.

// Instead of a long inline CSS, you can use a variable like this:
const dmvButtonStyle = {
  width: '250px',
  padding: 20, 
  backgroundColor: 'steelblue', 
  color: 'white', 
  fontWeight: 600, 
  borderRadius: 10, 
  margin: '10px'
};

// Inside the curly braces, you can use JS expression. In the button example, we
// are using string interpolation {`Some string is equal to ${someVariable}`}


// Now to clean up the big mess of render body, we pull all components into their own
// functions

function MyHeader(){
  return(
    <div>
      <h1>Apply for a Driver's License</h1>
      <p className={'niceParagraph'}>You are {userAge} years old</p>
      <p><b>{msgText}</b></p>
      <div style={{display:'flex'}}>
        <div style={{flex: 1, border:'1px dashed red', margin: 4, padding: '2em', borderRadius: 10, boxShadow: '-10px -10px pink'}}>
          {`You are ${userAge}`}
        </div>
        <div style={{flex: 1, border:'4px ridge #6699cc', margin: 4, padding: '2em', borderRadius: 10, boxShadow: '10px 10px lightblue'}}>
          {`${msgText}`}
        </div>
      </div>
      <button style={dmvButtonStyle}>Don't Press this Button</button>
    </div>);
}

function MyTableOLD(){
  return(
    <table>
      <thead>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </thead>
      <tr>
        <td>Row1Col1</td>
        <td>Row1Col2</td>
        <td>Row1Col3</td>
      </tr>
      <tr>
        <td>Row2Col1</td>
        <td>Row2Col2</td>
        <td>Row2Col3</td>
      </tr>
      <tr>
        <td>Row3Col1</td>
        <td>Row3Col2</td>
        <td>Row3Col3</td>
      </tr>
    </table>
  );
}

function MyFooterOLD(){
  return(
    <footer>&copy; 2023 This footer contains no arms</footer>
  );
}

function MyPetInline(props){
  const color = props.color?props.color:'lightblue';
  return(
    <div style={{overflow: 'hidden', width: '31.33%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center', margin: '5px', backgroundColor: color, borderRadius: '4px'}}>
        <img src={props.src} height={150} alt={props.src} style={{filter: 'sepia(70%)'}}/>
        <h1>{props.name}</h1>
        <p>Pet Type: {props.type}</p>
        <p>Age: {props.age}</p>
        <p>ID: {props.id}</p>
        <button>More</button>
    </div>
  );
}

// For the MAP function call
function createPetCard(pet){
  return(
    <MyPetInline 
      key={pet.id}
      name={pet.name}
      src={pet.url}
      type={pet.type}
      age={pet.age}
      id={pet.id}
      color={'red'}
    />
  );
}
// ReactDOM.render(
//   <div style={{padding:1+'em'}}>
//     <FontAwesomeIcon icon={faCaravan} />
//     <FontAwesomeIcon icon={faClock} />
//     <FontAwesomeIcon icon={faPaperPlane} />
//     <FontAwesomeIcon icon={faBars} />
//     <FontAwesomeIcon icon={faRobot} className="fa-icon-color"/>
//     <MyHeader />
//     <MyTable />
//     <MyFooter />
//     {/* map with modified arrow function */}
//     <div style={{display: 'flex', flexWrap:'wrap'}}>
//       <h1>Test Modified Arrow Function</h1>
//       {Pets.map((pet)=>{return <MyPetInline key={pet.id} name={pet.name} />})}
//     </div>
//     {/* map with arrow function */}
//     <div style={{display: 'flex', flexWrap:'wrap'}}>
//       <h1>Test Arrow Function</h1>
//       {Pets.map(pet=><MyPetInline key={pet.id} name={pet.name} />)}
//     </div>
//     {/* map with anonymous function */}
//     <div style={{display: 'inline', flexWrap:'wrap'}}>
//       {/* {Pets.map((pet)=>{<MyPetInline key={pet.id} name={'TESTEST'} src={pet.url} type={pet.type} age={pet.age} id={pet.id} color={'red'} />})} */}
//       <h1>Test Advanced Map Function</h1>
//       {Pets.map(function(pet){return <p>Test</p>})}
//     </div>
//     {/* map with long method */}
//     <div style={{display: 'flex', flexWrap:'wrap'}}>
//       {Pets.map(createPetCard)}
//     </div>
//     <div style={{display: 'flex', flexWrap:'wrap'}}>
//       <MyPet />
//     </div>
//     <div style={{display: 'flex', flexWrap:'wrap'}}>
//       <MyPetInline 
//         name={Pets[0].name}
//         src="https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/01/loris.jpg"
//         type="Loris"
//         age="2"
//         id="A long block of text to test flex stretch. It would be easier if your image was pure 100% red. Then you could just add the target degree directly and adjust saturation and lightness using HSL for target. For a white color start point the first step is to convert and define an intermediate color so we can saturate and rotate it later on"
//       />
//       <MyPetInline 
//         name={Pets[1].name}
//         src="https://s.hdnux.com/photos/01/10/01/34/18880304/3/1200x0.jpg"
//         type="Parrot"
//         age="3"
//         id="vbncvb"
//       />
//       <MyPetInline 
//         name={Pets[2].name}
//         src="https://thumbor.bigedition.com/halloween-moon-crab/0AKNnH0GHiUxUW53n3kUvIevuSI=/800x797/filters:format(webp):quality(80)/granite-web-prod/63/68/6368eecdbd8b4063af50f0e91d02d989.jpeg"
//         type="Crab"
//         age="7"
//         id="mwerjngtr"
//       />
//     </div>
//   </div>, 
//   document.getElementById('root')
// );

switch (urlParams['assignment']) {
  case 'assignment3':
    ReactDOM.render(<div><App /></div>, document.getElementById('root'));
    break;
  case 'project2':
    ReactDOM.render(<div><App2 /></div>, document.getElementById('root'));
    break;
}


/*


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
