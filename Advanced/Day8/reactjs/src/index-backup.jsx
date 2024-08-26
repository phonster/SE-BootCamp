import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "/src/Header";
import Nav from "/src/Nav";
import App from "/src/App";

const myvar = " A Test String ";
const imgSrc = "https://static.giant-bicycles.com/Images/Giant/Showcases/defy_adv_sl_thumb_1692391539.jpg"
const root = ReactDOM.createRoot(document.getElementById('root'));


function Header2(){
  return(
    <h2>This is my in-line H2 header inside index.jsx!</h2>
  );
}

root.render(
  <div>
    <App />
    <Nav />
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
    </ul>
    <h2>Let's try some examples</h2>
    <h5>Image</h5>
    <img src={imgSrc} width="40%" alt={"Test"} title="test" />
  </div>
);
