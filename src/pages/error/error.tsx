import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import Link404 from '../../img/404-link.png'
import './error.css'

export default function Error(){
    return(
        <div className=' page page-404'>
            <div>
                <h3>404</h3>
                <br />
                <h1>Página não encontrada</h1>
                <p>Não foi possível encontrar a página que está procurando.</p>
                <br />
                <Link to="/" className='link-404'> <IoArrowBackOutline /> Voltar</Link>
            </div>
            <img src={Link404}/>
        </div>
    )
}