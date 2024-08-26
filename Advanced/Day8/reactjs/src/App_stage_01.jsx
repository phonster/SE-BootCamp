import { useState } from 'react'
import Header from "/src/Header";
import Nav from "/src/Nav";
import './App.css'

function Header2(){
  return(
    <h2>This is my in-line H2 header inside index.jsx!</h2>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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

export default App
