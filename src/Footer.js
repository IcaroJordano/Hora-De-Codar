import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




function Footer(){
    return(
        <div className="Footer">
            <ul>
                <li><a href="https://www.github.com/IcaroJordano" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a> </li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram></FaInstagram> </a></li>
            </ul>
            <p>Karo&copy;2024</p>
        </div>
    )
}
export default Footer