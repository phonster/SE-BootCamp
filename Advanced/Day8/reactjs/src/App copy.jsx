import { useState } from 'react'
import Header from "/src/Header";
import Nav from "/src/Nav";
import "./style.css";
import Rides from "./Rides";
import Main from "./Main";

const myvar = " A Test String ";
const imgSrc = "https://static.giant-bicycles.com/Images/Giant/Showcases/defy_adv_sl_thumb_1692391539.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Nav />
        <Main />
        {/* <section className="my-row">
          {Rides.map(CardPro)}
        </section> */}
        <section id="my-notes" className="visually-hidden">
          <h1 className="h1Style">I think it's working now. Type has to be module {myvar}</h1>
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
        </section>
      </div>
    </>
  )
}

export default App;
