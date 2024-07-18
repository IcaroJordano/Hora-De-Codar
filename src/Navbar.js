import './Navbar.css'
import { FaBitcoin } from "react-icons/fa";
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="Navbar">
            <FaBitcoin></FaBitcoin>
            <ul>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/Section1">Section1</Link></li>
                <li><Link className='link' to="/Section2">Section2</Link></li>
                <li><Link className='link' to="/Section3">Section3</Link></li>
            </ul>
        </div>
    )
}
export default Navbar