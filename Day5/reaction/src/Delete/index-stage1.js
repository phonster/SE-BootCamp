import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import reportWebVitals from './reportWebVitals';

// You can add some JS vars here
const userBirthYear = 2005;
const currentYear = new Date().getFullYear();

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

ReactDOM.render(
  <div style={{padding:10+'em'}}><h1>Apply for a Driver's License</h1>
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

  </div>, 
  document.getElementById('root')
);



/*
ReactDOM.render(<h1>Hello React</h1>, document.getElementById('root'));


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
