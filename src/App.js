import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
// import Top from "./Top.js"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import Home from "./Home.js"
import Section1 from "./Section1.js"
import Section2 from "./Section2.js"
import Section3 from "./Section3.js"
import "./Section.css"

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar></Navbar>
        <Routes className="Section" >
          <Route path="/" element={<Home></Home>}/>
          <Route path="/Section1" element={<Section1></Section1>}/>
          <Route path="/Section2" element={<Section2></Section2>}/>
          <Route path="/Section3" element={<Section3></Section3>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
