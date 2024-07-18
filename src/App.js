import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
// import Top from "./Top.js"
import Navbar from "./lawout/Navbar.js"
import Footer from "./lawout/Footer.js"
import Home from "./pages/Home.js"
import Section1 from "./pages/Projects.js"
import Section2 from "./pages/Empresa.js"
import Section3 from "./pages/Contact.js"
// import "./Section.css"

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar></Navbar>
        <Routes className="Section" >
          <Route path="/" element={<Home></Home>}/>
          <Route path="/Projects" element={<Section1></Section1>}/>
          <Route path="/Empresa" element={<Section2></Section2>}/>
          <Route path="/Contact" element={<Section3></Section3>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
