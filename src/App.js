import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import Aboutus from './Pages/Aboutus';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FooterTop from './Components/Footer-top';
import Footer from './Components/Footer';
import NavComponents from './Components/Nav';


function App() {
  return (
    <div className="App">
      <NavComponents/>
      {/* <Homepage/> */}
       <Routes>
      <Route path="/" element={<Homepage/>} /> 
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
      
      </Routes> 
     
     <FooterTop/>
     <Footer/>
    </div>
  );
}

export default App;
