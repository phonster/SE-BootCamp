import { useState } from 'react'
import Header from "/src/Header";
import Nav from "/src/Nav";
import "./style.css";
import Rides from "./Rides";

function Header2() {
  return (
    <h2>This is my in-line H2 header inside index.jsx!</h2>
  );
}

const cardImg1 = "img/AdobeStock_141353871.jpeg";
const cardImg2 = "img/OIP.jpg";
const cardImg3 = "img/nice-bike-path.jpg";

function ManualCard(props) {
  return (
    <div className="info-box">
      <img src={props.imgurl} alt="Mountain biking on a mountain" />
      <h4>{props.title}</h4>
      <h6>{props.description}</h6>
      <p className="col3-content">Sign up for our exhilarating mountain biking tour to explore breathtaking trails and experience the thrill of the outdoors. Whether you're a seasoned rider or a beginner, our guided tours offer a perfect blend of adventure and scenic beauty.</p>
      <button className="btn red-button" data-bs-toggle="modal" data-bs-target="#mountainModal">{props.buttonname}</button>
    </div>
  );
}

function Card(props) {
  return (
    <div className="info-box">
      <img src={props.imgurl} alt="Mountain biking on a mountain" />
      <h4>{props.title}</h4>
      <h6>{props.description}</h6>
      <p className="col3-content">Sign up for our exhilarating mountain biking tour to explore breathtaking trails and experience the thrill of the outdoors. Whether you're a seasoned rider or a beginner, our guided tours offer a perfect blend of adventure and scenic beauty.</p>
      <button className="btn red-button" data-bs-toggle="modal" data-bs-target="#mountainModal">{props.buttonname}</button>
    </div>
  );
}

function CardPro(ride) {
  return (
    <div className="info-box" key={ride.rideID}>
      <img src={ride.imgurl} alt="Mountain biking on a mountain" />
      <h4>{ride.title}</h4>
      <h6>{ride.description}</h6>
      <button className="btn red-button" data-bs-toggle="modal" data-bs-target="#mountainModal">{ride.buttonname}</button>
      <p className="col3-content">Join a ride</p>
    </div>
  );
}

const myvar = " A Test String ";
const imgSrc = "https://static.giant-bicycles.com/Images/Giant/Showcases/defy_adv_sl_thumb_1692391539.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Nav />
      <section className="my-row">
          {Rides.map(CardPro)}
        </section>
      <section className="my-row">
        {Rides.map(ride => <Card key={ride.rideID} title={ride.title} description={ride.description} imgurl={ride.imgurl} buttonname={ride.buttonname} />)}
      </section>
      <section className="my-row">
      <ManualCard title="Mountain Biking" description="Poconos - $789" buttonname="Mountain" imgurl={cardImg1} />
        <ManualCard title="Road Biking" description="Hudson Valley - $189" buttonname="Road" imgurl={cardImg2} />
        <ManualCard title="Touring" description="Empire State - $389" buttonname="Tour" imgurl={cardImg3} />
        </section>
        <h1 className="h1Style">I think it's working now. Type has to be module {myvar}</h1>
        <Header />
        <Header2 />
        <pre>
          &lt;script type="module" src="../src/index.jsx"&gt;
        </pre>
        <ul>
          <li>Index.html is just an entry point. The entire doc only has one node: root</li>
          <li>jsx files renders "html" code, which is just jsx</li>
          <li>jsx files support plain old javascript code</li>
          <li>All tags must be closed</li>
          <li>Note subtle differences in attributes e.g. class =&gt; className</li>
          <li>background-color =&gt; backgroundColor</li>
          <li>Within the HTML code, javascript variables can be rendered using {"{}"}</li>
          <li>Define components and extract to their own files</li>
          <ul>
            <li>First line of component must be <code>import React from "react";</code></li>
            <li>Last line of component must be <code>export default componentname</code></li>
          </ul>
          <li>When defining your single tag, you can use &lt;&gt; .... &lt;/&gt;</li> instead of div
          <li>Creating our own Card component: introducing PROPS</li>
            <ul>
              <li>function Card(props){"{}"}</li>
              <li>&lt;Card (pass properties here)/&gt;</li>
              <li>&lt;Card title="My Title"/&gt;</li>
              <li>Create a separate file called Rides.tsx and define Ride array</li>
              <li>Import the array: import Rides from "./Rides"</li>
              <li>Ensure each element has a unique id</li>
              <li>When looping through array and calling Card component, make sure there is a key = unique id</li>
              <li>ManualCard demonstrates manually calling component and hard coding properties</li>
              <li>Card demonstrates using map to loop through Rides array</li>
              <li>CardPro component is the best way to do things. So clean.</li>
            </ul>
        </ul>
        <h2>Let's try some examples</h2>
        <h5>Image</h5>
        <img src={imgSrc} width="40%" alt={"Test"} title="test" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
