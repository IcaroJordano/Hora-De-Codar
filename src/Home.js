import "./Home.css"
// import { FaPiggyBank } from "react-icons/gi";
import { PiPiggyBankFill } from "react-icons/pi";
import {Link} from "react-router-dom"


function Home(){
    return(
        <div  className="Home">
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p >Comece a gerenciar os seus projetos</p>
            <button>
            <Link className="Link" to="/Section1">Criar Projetos</Link></button>
            <PiPiggyBankFill></PiPiggyBankFill>
        </div>
    )
}
export default Home