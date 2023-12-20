import './navbar.css'
import { useState } from "react";
import { GiTriforce } from "react-icons/gi";
import { IoMenu} from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className='navbar'>
            <Link to="/"><GiTriforce className="icon"/></Link>
            <ul className={`${isOpen && "open"}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="games">Jogos</Link></li>
            </ul>
            <IoMenu className={`checkbtn icon`} onClick={() => setIsOpen(!isOpen)}/>
        </header>
    )
}
