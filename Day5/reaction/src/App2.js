import './App.css';
import HeaderState from './Components/HeaderState/HeaderState';
import FourByOne from './Components/FourByOne/FourByOne';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Schedule from './Components/Schedule/Schedule';
  
function App2() {
  return (
    <div>
      <HeaderState />
      <Nav />
      <FourByOne />
      <Schedule />
      <Footer />
    </div>
  );
}
export default App2;
