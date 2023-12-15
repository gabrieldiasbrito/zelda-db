import './navbar.css'
import { useState } from "react";
import { GiTriforce } from "react-icons/gi";
import { IoSearch , IoMenu} from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className='navbar'>
            <Link to="/"><GiTriforce className="icon"/></Link>
            <ul className={`${isOpen && "open"}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Games">Jogos</Link></li>
                <li><Link to="">Personagens</Link></li>
                <li><Link to="">Monstros</Link></li>
                <li><Link to="">Chefes</Link></li>
                <li><Link to="">Dungeons</Link></li>
                <li><Link to="">Locais</Link></li>
                <li><Link to="">Items</Link></li>
            </ul>
            <Link to="Search"><IoSearch className="icon"/></Link> 
            <IoMenu className={`checkbtn icon`} onClick={() => setIsOpen(!isOpen)}/>
        </header>
    )
}
