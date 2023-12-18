import { IoSearch } from "react-icons/io5";
import './search.css'

export default function Search(){
    return(
        <div className="search">
            <input type="text"/>
            <button>
                <IoSearch/>
            </button>
        </div>
    )
}