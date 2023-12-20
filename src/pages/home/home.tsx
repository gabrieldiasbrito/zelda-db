import { Link } from "react-router-dom"
import Logo from '../../img/logo.png'
import './home.css'

export default function Home(){

    return(
        <div className="home">
            <br />
            <img src={Logo}/>
            <p>Clique no botão para ver os jogos e informações da franquia</p>
            <Link to={"/games"}>
                <button>Ver jogos</button>
            </Link>
        </div>
    )
}