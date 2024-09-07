import { useState } from 'react'
import Header from "/src/Header";
import Nav from "/src/Nav";
import "./style.css";
import Mainer from "./Mainer";
import Footer from "./Footer";

const myvar = " A Test String ";
const imgSrc = "https://static.giant-bicycles.com/Images/Giant/Showcases/defy_adv_sl_thumb_1692391539.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Nav />
        <Mainer />
        <Footer />
      </div>
    </>
  )
}

export default App;
