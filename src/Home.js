import "./Home.css"
import { FaPiggyBank } from "react-icons/gi";


function Home(){
    return(
        <div  className="Home">
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p >Comece a gerenciar os seus projetos</p>
            <button>Criar Projetos</button>
            <FaPiggyBank></FaPiggyBank>
        </div>
    )
}
export default Home